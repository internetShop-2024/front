import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./dist/navBar.css";
import { Cart } from "../Cart/cart";
import { NavLink } from "react-router-dom";

export function NavBar() {
    const cart = useSelector(state => state.cart.cart);
    const myCart = localStorage.getItem('cart');
    const objCart = JSON.parse(myCart);


    function openCart() {
        document.getElementById("cart_component").style.display = "flex";
        setTimeout(() => {
            document.getElementById("cart_con").style.transform = "translateX(0vw)";
            document.getElementById("cart_component").style.opacity = 1;
        }, 100);
        document.body.classList.add("no-scroll");
    }

    return (
        <div className="nav_bar">
            <div className="top_nav">
                <div className="left_nav">
                    <NavLink activeClassName="selected" to={"/"}><img className="logo" src="./img/logo.png" alt="" /></NavLink>
                    <NavLink activeClassName="selected" to={"/about"} className="link">про нас</NavLink>
                    <NavLink activeClassName="selected" to={"/payment"} className="link">оплата та доставка</NavLink>
                    <div className="link">акції</div>
                    <NavLink activeClassName="selected" to={"/contacts"} className="link">контакти</NavLink>
                    <div className="link">блог</div>
                    <div className="link">новини</div>
                </div>
                <div className="right_nav">
                    <img className="social" src="./img/Telegram.png" alt="" />
                    <img className="social" src="./img/Instagram.png" alt="" />
                    <img className="social" src="./img/Facebook.png" alt="" />
                    <img className="social" src="./img/Youtube.png" alt="" />
                </div>
            </div>
            <div className="bot_nav">
                <div className="b_left_nav">
                    <NavLink to='/catalog' className="catalog">КАТАЛОГ</NavLink>
                    <div className="search_con">
                        <input className="search" type="text" />
                        <img className="s_img" src="./img/Search.png" alt="" />
                    </div>
                </div>
                <div className="b_right_nav">
                    <NavLink to='/sign-in' className="sign_in">ВХІД/РЕЄСТРАЦІЯ</NavLink>
                    <div onClick={openCart} className="cart">
                        <img src="./img/cart.png" alt="" />
                        {cart.length > 0 && (
                            <div className="cart_counter">{cart.length}</div>
                        )}
                    </div>
                </div>
            </div>
            <Cart />
        </div>
    );
}

export default NavBar;
