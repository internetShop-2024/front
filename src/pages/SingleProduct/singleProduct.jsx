import React,{useState, useEffect} from "react";

import "./dist/singleProduct.css"
import { Footer } from "../../components/Footer/footer";
import { ProductCard } from "../../components/ProductCard/productCard";


export function SingleProduct(){

    const [fav, setFav] = useState('./img/Star 1.svg')
    const [isFav, setIsFav] = useState(false)
    const [counter, setCounter] = useState(1)


    let currentIndex = 0;

    const img = [
        {
            id:1,
            img: "./img/image 7.png"
        },
        {
            id:2,
            img: "./img/cart.png"
        },
        {
            id:3,
            img: "./img/visa.png"
        },
        {
            id:4,
            img: "./img/image 7.png"
        },
        {
            id:5,
            img: "./img/semena.png"
        }
    ]


    function satFav(){
        if(isFav === false){
            setFav('./img/Star 2.svg')
            setIsFav(true)
        }   
        else{
            setFav('./img/Star 1.svg')
            setIsFav(false)
        }
    }


    function addCount(){
        setCounter(counter + 1)
    }
    function remoceCount(){
        if(counter !== 1){
            setCounter(counter - 1)
        }
        else{
            setCounter(1)
        }
    }

    useEffect(()=> {
        window.scrollTo(0, 0)
    })



    function goNext() {
        const con = document.getElementById('imgs_con').style;
        const width = 49;
    
        currentIndex = (currentIndex + 1) % img.length;
        con.transform = `translateX(-${width * currentIndex}vw)`;
    }

    function goPrev() {
        const con = document.getElementById('imgs_con').style;
        const width = 49;
    
        currentIndex = (currentIndex - 1 + img.length) % img.length;
        con.transform = `translateX(-${width * currentIndex}vw)`;
    }


    return(
        <div className="single_product">
            <div className="single_product_page">
                <div className="about_product">
                    <div className="carousel_con">
                        <div className="product_view">
                            <div id="imgs_con" className="imgs_con">
                                {
                                    img.map((imgs,index)=>(
                                        <div className="img_section">
                                            <img class="carousel-item" index ={index} key={imgs.id} src={imgs.img} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="carousel_controls">
                            <img className="carousel_btn" onClick={goPrev} src="./img/left.svg" alt="" />
                            <img className="carousel_btn" onClick={goNext} src="./img/right.svg" alt="" />

                        </div>
                    </div>
                    <div className="product_info">
                        <div className="top_descr">
                            <div className="product_article">Артикул: ytye678</div>
                            <div className="product_name">Насіння Горох Овочевий Телефон Seedera, 20г</div>
                            <div onClick={satFav} className="add_to_favorite">
                                <img className="star" src={fav} alt="" />
                                <span>Додати до обраного</span>
                                
                            </div>
                            <div className="product_counter">
                                <span onClick={remoceCount} className="counter_control">-</span>
                                <div className="sep_counter"></div>
                                <span className="count_p">{counter}</span>
                                <div className="sep_counter"></div>
                                <span onClick={addCount} className="counter_control">+</span>
                            </div>
                            <div className="price_section">
                                <span className="sale_price">6 грн</span>
                                <span className="price_no_sale">8 грн</span>

                            </div>

                        </div>
                        <div className="bot_descr">
                            <div className="order_btn">До кошика</div>
                        </div>
                    </div>
                </div>
                <div className="about_heading">
                    <span>Опис</span>
                    <span>Характеристика</span>
                    <span>Застосування</span>
                    <span>Відгуки/запитання</span>

                </div>
                <div className="about_section">
                    <span className="about_re">
                        Користь зеленого горошка для організму колосальна, його плоди багаті білками, вітамінами, мінералами та іншими корисними речовинами, що сприяють відверненню багатьох захворювань. Сахарний сорт гороха. Телефон володіє чудовими харчовими властивостями, сучасністю плодів і високою врожайністю.
                        Зовнішній вид
                        Все знают и узнают горох на грядках. Це високі тонкі стеблі, на яких розташовано близько 10 стручков. Стручки довжиною 9—12 см містять у собі приблизно 9 горошин.
                    </span>
                </div>
                <div className="prop_block">
                    <span>З цим часто купують</span>
                    <div className="card_con">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>

                    </div>
                </div>

            </div>
            <Footer/>

            
        </div>
    )
}