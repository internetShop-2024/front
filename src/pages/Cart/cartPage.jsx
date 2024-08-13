import { NavLink } from "react-router-dom"
import "./dist/cartPage.css"
import { Footer } from "../../components/Footer/footer"

import { CartCard } from "../../components/CartCard/cartCard";
import { useEffect } from "react";

export function CartPage(){


    const token = localStorage.getItem('token');
    const myCart = localStorage.getItem('cart');
    const objCart = myCart ? JSON.parse(myCart) : { cart: [] }; // Provide a default value if myCart is null

    const totalPrice = objCart.cart.reduce((sum, item) => {
        return sum + parseFloat(item.price) * item.counter;
    }, 0);

    return(
        <div className="cart_page">
            <div className="cart_pp">
                <div className="cart_left_part">
                    {
                        !token && ( // Only render if the token is not present
                            <div className="info_con">
                                <span className="warning">Увага!</span> Щоб бачити свої замовлення в особистому кабінеті, обов'язково <NavLink to='/sign-in'>авторизуйтесь</NavLink>  або <NavLink to='/sign-up'>зареєструйтесь</NavLink> перед оформленням замовлення!
                            </div>
                        )
                    }
                    <div className="contact_info">
                        <span className="info_heading">Контактна інформація:</span>
                        <input type="text" placeholder="ПІБ"/>
                        <input type="text" placeholder="+380..."/>

                    </div>
                    <div className="shiping_info">
                        <span className="info_heading">Доставка:</span>
                        <div class="radio-buttons">
                            <label class="radio-button">
                                <input type="radio" name="option" value="option1"/>
                                <div class="radio-circle"></div>
                                <span class="radio-label">Нова пошта </span>
                            </label>
                            <label class="radio-button">
                                <input type="radio" name="option" value="option2"/>
                                <div class="radio-circle"></div>
                                <span class="radio-label">Укр пошта</span>
                            </label>
                        </div>
                        <div className="input_group">
                            <input className="input" type="text" placeholder="Місто / Населений пункт"/>
                            <input className="input" type="text" placeholder="Відділення"/>
                        </div>
                        

                    </div>
                    <div className="payment_info">
                        <span className="info_heading">Спосіб оплати:</span>
                        <div class="radio-buttons_p">
                            <label class="radio-button">
                                <input type="radio" name="option1" value="option33"/>
                                <div class="radio-circle"></div>
                                <span class="radio-label">По реквізитам </span>
                            </label>
                            <label class="radio-button">
                                <input type="radio" name="option1" value="option43"/>
                                <div class="radio-circle"></div>
                                <span class="radio-label">Онлайн оплата (MonoPay)</span>
                            </label>
                        </div>
                        
                    </div>
                    <div className="comment_info">
                        <span className="info_heading">Коментар до замовлення:</span>

                        <textarea className="text_area" name="" id="" placeholder="Коментар..."></textarea>
                    </div>

                    <div className="phone_info">

                        <div class="radio-buttons_p">
                            <label class="radio-button">
                                <input type="radio" name="option2" value="option33"/>
                                <div class="radio-circle"></div>
                                <span class="radio-label">Замовлення оформлене вірно, не телефонувати для підтвердження.</span>
                            </label>
                        </div>
                    </div>

                    <div className="shiping_btn">Оформити замовлення</div>
                </div>
                <div className="cart_right_part">
                    <span className="info_heading">Ваше замовлення:</span>
                    <div className="cart_order_con">
                        {objCart.cart.map((item, index)=>(
                        <CartCard index={index} key={item.id} product ={item}/>

                        ))}
                    </div>
                    <div className="shiping_price_sum">Сума: {totalPrice} грн</div>


                </div>
            </div>
            <Footer/>
        </div>
    )
}