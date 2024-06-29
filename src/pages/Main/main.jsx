import React from "react";


import "./dist/main.css"
import { NavBar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/ProductCard/productCard";
import { Footer } from "../../components/Footer/footer";

export function Main(){
    return(
        <div>
            <NavBar/>
            <div className="main">
                <div className="top_banner">
                    <div className="left_block"></div>
                    <div className="r_block"></div>
                </div>
                <div className="smth_2">
                    <div className="btn"></div>
                    <div className="field"></div>
                </div>
                <div className="product_block">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>

                </div>
                <div className="action_btn_con">
                    <div className="action_btn"></div>
                </div>
                <div className="news_block">
                    <div className="news"></div>
                    <div className="news"></div>
                    <div className="news"></div>
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