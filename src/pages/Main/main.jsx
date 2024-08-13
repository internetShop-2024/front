import React from "react";
import "./dist/main.css";
import { ProductCard } from "../../components/ProductCard/productCard";
import { Footer } from "../../components/Footer/footer";
import { NewsCard } from "../../components/NewsCard/newsCard";
import { useGetProductsQuery } from "../../store/productApi";

export function Main() {
    const { data = { products: [] }, isLoading } = useGetProductsQuery();

    return (
        <div>
            <div className="main">
                <div className="carousel_block">
                    <img className="img_banner" src="./img/banner.jpg" alt="Banner" />
                    <div className="gradient">
                        <div className="banner_heading">
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
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : data.products.length ? (
                        data.products
                            .filter(product => product.display) // Фільтруємо продукти
                            .map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
                <div className="action_btn_con">
                    <div className="action_btn">
                        <p>ЗАВАНТАЖИТИ ЩЕ</p>
                    </div>
                </div>
                <div className="post_heading">
                    <p>НАШІ ПОСТИ</p>
                </div>
                <div className="news_block">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
                <div className="action_btn_con">
                    <div className="action_btn">
                        {/* Additional content can be added here */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
