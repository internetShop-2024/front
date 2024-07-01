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
                <div className="carousel_block">
                    <img className="img_banner" src="./img/banner.jpg" alt="" />
                    <div className="gradient">
                        <div class="banner_heading">
                            Найкращі
                            <span>пропозиції цього сезону</span>
                        </div>
                    </div>
                </div>
                <div className="category_field">
                    <div className="sort">Популярне</div>
                    <div className="sort">На цей сезон</div>
                    <div className="sort">Новинки</div>
                    <div className="sort">Знижка</div>
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
                    <div className="action_btn">
                        <p>ЗАВАНТАЖИТИ ЩЕ</p>
                    </div>
                </div>
                <div className="news_block">
                    <div className="news"></div>
                    <div className="news"></div>
                    <div className="news"></div>
                </div>
                <div className="action_btn_con">
                    <div className="action_btn">
                        
                    </div>
                </div>
                <div className="big_block"></div>
            </div>
            <Footer/>
        </div>
    )
}