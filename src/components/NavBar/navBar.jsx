import React from "react";


import "./dist/navBar.css"

export function NavBar(){
    return(
        <div className="nav_bar">
            {/* <div className="middle_block">
                <div className="m_top_block">
                    <img src="./img/logo.png" alt="" />

                    <div className="link">про нас</div>
                    <div className="link">оплата та доставка</div>
                    <div className="link">акції</div>
                    <div className="link">контакти</div>
                    <div className="link">блог</div>
                    <div className="link">новини</div>

                </div>
                <div className="m_bottomn_block">
                    <div className="catalog">КАТАЛОГ</div>
                    <div className="search"></div>
                </div>
                
            </div>
            <div className="right_block">
                <div className="r_top_block">
                    <div className="button"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                </div>
                <div className="r_bottomn_block">
                    <div className="smth"></div>
                    <div className="cart"></div>
                </div>
            </div> */}
            <div className="top_nav">
                <div className="left_nav">
                <img src="./img/logo.png" alt="" />

                <div className="link">про нас</div>
                <div className="link">оплата та доставка</div>
                <div className="link">акції</div>
                <div className="link">контакти</div>
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
                    <div className="catalog">КАТАЛОГ</div>
                    <div className="search_con">
                        <input className="search" type="text" />
                        <img className="s_img" src="./img/Search.png" alt="" />
                    </div>
                </div>
                <div className="b_right_nav">
                    <div className="sign_in">ВХІД/РЕЄСТРАЦІЯ</div>
                    <div className="cart">
                        <img src="./img/cart.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}