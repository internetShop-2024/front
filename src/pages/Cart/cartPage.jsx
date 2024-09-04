import { NavLink, redirect } from "react-router-dom";
import "./dist/cartPage.css";
import { Footer } from "../../components/Footer/footer";
import { CartCard } from "../../components/CartCard/cartCard";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useSetOrderMutation, usePayFunctionMutation } from "../../store/orderApi";

export function CartPage() {
    const [user, setUser] = useState(null);
    const [isTokenExpired, setIsTokenExpired] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const [sorder, {data,isloading,error}] = useSetOrderMutation()
    const [payment, {pay, isLoading, isError}] = usePayFunctionMutation()


    const [fullname, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryType, setDeliveryType] = useState('');
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [paymentType, setPayment] = useState()
    const [agreement, setAgreement] = useState(true);

    const token = localStorage.getItem('token');
    const myCart = localStorage.getItem('cart');
    const objCart = myCart ? JSON.parse(myCart) : { cart: [] }; // Provide a default value if myCart is null

    const cost = objCart.cart.reduce((sum, item) => {
        return sum + parseFloat(item.price) * item.counter;
    }, 0);

    

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, [token]);

    useEffect(() => {
        if (user) {
            const currentDateObject = new Date();
            const formattedCurrentDate = currentDateObject.toLocaleString();
            setCurrentDate(formattedCurrentDate);
    
            const expiryDateObject = new Date(user.exp * 1000);
            const formattedExpiryDate = expiryDateObject.toLocaleString();
            setExpiryDate(formattedExpiryDate);
    
            const isExpired = currentDateObject > expiryDateObject;
            setIsTokenExpired(isExpired)
        }
    }, [user]);


    useEffect(() => {
        if (user) {
            const currentDateObject = new Date();
            const expiryDateObject = new Date(user.exp * 1000);
            
            if (currentDateObject <= expiryDateObject) {
                setName(user.fullname || '');
                setPhone(user.phone || '');
            } else {
                setName('');
                setPhone('');
            }
        }
    }, [user]);



    const handleChange = (e) => {
        const newValue = e.target.value;
        setDeliveryType(newValue);
        console.log('Selected Delivery Type:', newValue); // Logs the selected value to the console
    };

    const payChange = (e) => {
        const newValue = e.target.value;
        setPayment(newValue);
        console.log('Selected Payment Type:', newValue); // Logs the selected value to the console
    };


    const handleCheckboxChange = (e) => {
        setAgreement(!e.target.checked);
        console.log(agreement) // Set `agreement` to `false` if checkbox is checked
    };



    const placeOrder =async() => {
        try{
            const transformedCart = objCart.cart.map(item => ({
                goodsId: item.id,
                quantity: item.counter,
            }));
            const order ={
                localStorage: transformedCart,
                cost,
                fullname,
                phone,
                deliveryType,
                city,
                address,
                paymentType,
                agreement
            }

            await sorder(order)
        }catch(e){
            console.error(e)
        }
    }


    const placePayment = async () => {
        try {
            const response = await payment({ amount: cost*100, redirectUrl: "http://localhost:3000/"});
            
            console.log('Full response:', response);
    
            // Перевіряємо наявність даних та поля pageUrl
            if (response.data && response.data.pageUrl) {
                window.open(response.data.pageUrl, '_blank'); // Відкрити нову вкладку з pageUrl
            } else {
                console.error('Page URL not found in response');
            }
        } catch (e) {
            console.error('Error during payment:', e);
        } 
    };

    return (
        <div className="cart_page">
            <div className="cart_pp">
                <div className="cart_left_part">
                    {isTokenExpired && (
                        <div className="info_con">
                            <span className="warning">Увага!</span> Щоб бачити свої замовлення в особистому кабінеті, обов'язково <NavLink to='/sign-in'>авторизуйтесь</NavLink> або <NavLink to='/sign-up'>зареєструйтесь</NavLink> перед оформленням замовлення!
                        </div>
                    )}
                    <div className="contact_info">
                        <span className="info_heading">Контактна інформація:</span>
                        <input type="text" value={fullname} placeholder="ПІБ" />
                        <input type="text" value={phone} placeholder="+380..." />
                    </div>
                    <div className="shiping_info">
                        <span className="info_heading">Доставка:</span>
                        <div className="radio-buttons">
                            <label className="radio-button">
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="option"
                                    value="NP"
                                    checked={deliveryType === 'NP'}
                                />
                                <div className="radio-circle"></div>
                                <span className="radio-label">Нова пошта</span>
                            </label>
                            <label className="radio-button">
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="option"
                                    value="UKRP"
                                    checked={deliveryType === 'UKRP'}
                                />
                                <div className="radio-circle"></div>
                                <span className="radio-label">Укр пошта</span>
                            </label>
                        </div>
                        <div className="input_group">
                            <input className="input" type="text" value={city} onChange={(e)=> {setCity(e.target.value)}} placeholder="Місто / Населений пункт" />
                            <input className="input" type="text" value={address} onChange={(e)=> {setAddress(e.target.value)}} placeholder="Відділення" />
                        </div>
                    </div>
                    <div className="payment_info">
                        <span className="info_heading">Спосіб оплати:</span>
                        <div className="radio-buttons_p">
                            <label className="radio-button">
                                <input onChange={payChange} checked ={paymentType === "transfer"} type="radio" name="paymentOption" value="transfer" />
                                <div className="radio-circle"></div>
                                <span className="radio-label">По реквізитам</span>
                            </label>
                            <label className="radio-button">
                                <input onChange={payChange} checked ={paymentType === "acquiring"} type="radio" name="paymentOption" value="acquiring" />
                                <div className="radio-circle"></div>
                                <span className="radio-label">Онлайн оплата (MonoPay)</span>
                            </label>
                        </div>
                    </div>
                    <div className="comment_info">
                        <span className="info_heading">Коментар до замовлення:</span>
                        <textarea className="text_area" placeholder="Коментар..."></textarea>
                    </div>
                    <div className="phone_info">
                        <div className="radio-buttons_c">
                            <label className="checkBox">
                                <input onChange={handleCheckboxChange} id="ch1" type="checkbox" />
                                <div className="transition"></div>
                            </label>
                            <span className="radio-label">Замовлення оформлене вірно, не телефонувати для підтвердження.</span>
                        </div>
                    </div>
                    <div className="shiping_btn" onClick={placePayment}>Оформити замовлення</div>
                </div>
                <div className="cart_right_part">
                    <span className="info_heading">Ваше замовлення:</span>
                    <div className="cart_order_con">
                        {objCart.cart.map((item, index) => (
                            <CartCard index={index} key={item.id} product={item} />
                        ))}
                    </div>
                    <div className="shiping_price_sum">Сума: {cost} грн</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
