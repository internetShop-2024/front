import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlicer";

import "./dist/productCard.css";

export function ProductCard(props) {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1);

    const addTo = (e) => {
        e.preventDefault()

        const productWithCounter = {
            ...props.product,
            counter: counter
        };
        dispatch(addToCart(productWithCounter));
    };

    const addcount = (e) => {
        e.preventDefault()
        setCounter(counter + 1);
    };

    const removecount = (e) => {
        e.preventDefault()

        setCounter(prevCounter => Math.max(1, prevCounter - 1));
    };

    return (
        <NavLink to={`/${props.product?._id}`} className="card">
            <p className="articule">Артикул: {props.product?.article}</p>
            <div className="img_con">
                <img src="./img/image 7.png" alt="" />
            </div>
            <div className="product___name">{props.product?.name}</div>
            <div className="bot_con">
                <div className="price_con">
                    <div className="sale">{props.product?.price} грн</div>
                    <div className="price">{props.product?.price} грн</div>
                </div>
                <div className="add_to_cart">
                    <div className="p_counter" onClick={(e) => {e.preventDefault()}}>
                        <div className="minus" onClick={removecount}>-</div>
                        <div className="number">{counter}</div>
                        <div className="plus" onClick={addcount}>+</div>
                    </div>
                    <div className="cart_btn" onClick={addTo}>До кошика</div>
                </div>
            </div>
        </NavLink>
    );
}