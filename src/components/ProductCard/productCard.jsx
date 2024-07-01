import React from "react";

import "./dist/productCard.css"

export function ProductCard(){
    return(
        <div className="card">
            <p className="articule">Артикул: 1222</p>
            <div className="img_con">
                <img src="./img/image 7.png" alt="" />
            </div>
            <div className="product___name">Насіння Горох Овочевий Телефон Seedera, 20г</div>
            <div className="bot_con">
                <div className="price_con">
                    <div className="sale">8 грн</div>
                    <div className="price">6 грн</div>
                </div>
                <div className="add_to_cart">
                    <div className="p_counter">
                        <div className="minus">-</div>
                        <div className="number">1</div>
                        <div className="plus">+</div>
                    </div>
                    <div className="cart_btn">До кошика</div>
                </div>
            </div>
        </div>
    )
}