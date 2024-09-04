import React,{useState, useEffect} from "react";

import "./dist/singleProduct.css"
import { Footer } from "../../components/Footer/footer";
import { ProductCard } from "../../components/ProductCard/productCard";

import { useParams } from "react-router-dom";

import { useGetProductQuery, useSetReviewMutation } from "../../store/productApi";
import { Review } from "../../components/Review/review";


export function SingleProduct(){
    const {id} = useParams()


    const {data, error, isLoading, refetch} = useGetProductQuery(id, {skip: false})

    const[setReview, {review,isloading, iserror}] = useSetReviewMutation()


    console.log(data)
 
    const [fav, setFav] = useState('./img/Star 1.svg')
    const [isFav, setIsFav] = useState(false)
    const [counter, setCounter] = useState(1)
    const [activeIndex, setActiveIndex] = useState(0);
    const [text, settext] = useState('')

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


    const handleClick = (index) => {
        setActiveIndex(index);
    };


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



    const points = [
        'Опис',
        'Характеристика',
        'Застосування',
        'Відгуки/запитання'
    ];


    const addReview = async() => {
        try{
            const review ={
                id,
                text
            }

            await setReview(review)
        }catch(e){
            console.error("Failed to authorize: ", e);

        }
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
                            <div className="product_article">Артикул: {data?.product.article}</div>
                            <div className="product_name">{data?.product.name}</div>
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
                                <span className="sale_price">{data?.product.price} грн</span>

                            </div>

                        </div>
                        <div className="bot_descr">
                            <div className="order_btn">До кошика</div>
                        </div>
                    </div>
                </div>
                <div className="about_heading">
                        {points.map((point, index) => (
                            <span
                                key={index}
                                className={`point ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                {point}
                            </span>
                        ))}
                </div>
                <div className="about_section">
                {activeIndex === 0 && (
                    <span className="about_re">
                        {data?.product.description}
                    </span>
                )}

                {activeIndex === 1 && (
                    <div className="about_re">
                        {/* Your content for "Характеристика" */}
                        <p>Content for "Характеристика"</p>
                    </div>
                )}

                {activeIndex === 2 && (
                    <div className="about_re">
                        {/* Your content for "Застосування" */}
                        <p>Content for "Застосування"</p>
                    </div>
                )}

                {activeIndex === 3 && (
                    <div className="review_block">
                        <div className="review_window">
                        <p>Відгуки покупців про {data.product.name}</p>
                        
                        </div>
                        {data?.product?.reviews && data.product.reviews.length > 0 ? (
                        data.product.reviews.map((review, index) => (

                            <Review review ={review} key={index}/>
                            
                        ))
                        ) : (
                        <p>Будьте першим, хто залише відгук про товар</p>
                        )}
                        <div className="review_form">
                            <span>Коментар</span>
                            <textarea placeholder="Ваш коментар" value={text} onChange={(e) => {settext(e.target.value)}} name="" id=""></textarea>
                            <div className="review_btn" onClick={addReview}>Залишити відгук</div>

                        </div>
                        

                    </div>
                    
                )}
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