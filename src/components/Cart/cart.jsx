import { NavLink } from "react-router-dom";
import { CartCard } from "../CartCard/cartCard";
import "./dist/cart.css"


export function Cart() {
    const myCart = localStorage.getItem('cart');
    const objCart = myCart ? JSON.parse(myCart) : { cart: [] }; // Provide a default value if myCart is null

    const totalPrice = objCart.cart.reduce((sum, item) => {
        return sum + parseFloat(item.price) * item.counter;
    }, 0);

    function closeCart() {
        document.getElementById("cart_component").style.opacity = 0;
        document.getElementById("cart_con").style.transform = "translateX(41vw)";

        setTimeout(() => {
            document.getElementById("cart_component").style.display = "none";
        }, 300);

        document.body.classList.remove("no-scroll");
    }



    return(
        <div id="cart_component" onClick={closeCart} className="cart_component">
            <div id="cart_con" onClick={(e) => {e.stopPropagation()}} className="cart_container">
                <div className="cart_header">
                    <div className="heading">Кошик</div>
                    <div className="delete_cart">Очистити</div>
                </div>
                <div className="cart_body">
                    <div className="product_cart_list">
                        {objCart.cart.map((item, index)=>(
                        <CartCard index={index} key={item.id} product ={item}/>

                        ))}
                    </div>
                    <div className="sep_cart_line"></div>
                    <div className="special">спеціальна пропозиція</div>
                </div>
                <div className="cart_footer">
                    <div className="price_sum">Сума: {totalPrice} грн</div>
                    <div className="back_to_shop"  onClick={closeCart}> ПРОДОВЖИТИ ПОКУПКИ</div>
                    <NavLink to="/cart" onClick={closeCart} className="make_an_order">Оформити замовлення</NavLink>

                </div>
            </div>
        </div>
    )
}