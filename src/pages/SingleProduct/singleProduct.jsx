import React from "react";

import "./dist/singleProduct.css"
import { NavBar } from "../../components/NavBar/navBar";
import { Footer } from "../../components/Footer/footer";


export function SingleProduct(){
    return(
        <div className="single_product">
            <NavBar/>
            <div className="single_product_page">
                <div className="about_product">
                    <div className="product_view"></div>
                    <div className="product_info">
                        <div className="top_descr">
                            <div className="product_name"></div>
                            <div className="short_description"></div>
                            <div className="short_description"></div>
                            <div className="short_description"></div>
                            <div className="short_description"></div>
                        </div>
                        <div className="bot_descr">
                            <div className="order_btn"></div>
                            <div className="bot_bot">
                                <div className="cart_s_p"></div>
                                <div className="counter"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_heading">
                    <div className="smth_3"></div>
                </div>
                <div className="about_section">
                    <div className="about"></div>
                    <div className="about"></div>
                    <div className="about"></div>
                    <div className="about"></div>
                    <div className="about"></div>
                </div>
                <div className="action_btn_con">
                    <div className="action_btn"></div>
                </div>
                <div className="n_block">
                    <div className="n"></div>
                    <div className="n"></div>
                    <div className="n"></div>
                </div>
                <div className="action_btn_con">
                    <div className="action_btn"></div>
                </div>
                <div className="big_block"></div>

            </div>
            <Footer/>

            
        </div>
    )
}