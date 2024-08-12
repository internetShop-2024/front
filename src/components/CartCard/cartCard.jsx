import React, { useState,useEffect } from "react";

import { useDispatch } from "react-redux";
import { removeFromCart, addToCart, updateCartItem } from "../../store/cartSlicer";

import "./dist/cartCard.css"


export function CartCard(props){

    const dispatch = useDispatch();
    
    const [counter, setCounter] = useState(props.product.counter);


    const addTo = () => {
        const productWithCounter = {
            ...props.product,
            counter: 1
        };
        dispatch(addToCart(productWithCounter));
    };



    useEffect(()=> {
        setCounter(props.product.counter)
    },[props.product.counter])


    const removecount = () => {
        dispatch(updateCartItem({ 
            id: props.product.id, 
            counter: 1 // Зменшуємо кількість на 1
        }));
    };


    const handleRemove = () => {
        dispatch(removeFromCart({ id: props.product.id }));
    };

    return(
        <div className="cart_card">
            <img className="cancel_cart_card" onClick={handleRemove} src="./img/cancel.svg" alt="" />
            <img className="cart_card_img" src="./img/image 7.png" alt="" />
            <div className="item_name">
                <p className="i_name">{props.product.name}</p> 
                <p className="i_articul">Артикул 1231</p>            

            </div>
            <div className="p_c_counter">
                <div className="minus" onClick={removecount}>-</div>
                <div className="number">{counter}</div>
                <div className="plus" onClick={addTo}>+</div>
            </div>
            <div className="c_price">{counter *props.product.price} грн</div>
        </div>
    )
}