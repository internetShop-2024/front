import { useState } from 'react';
import ReactSlider from 'react-slider';
import { ProductCard } from '../../components/ProductCard/productCard';
import { useGetProductsQuery, useGetByPriceQuery } from '../../store/productApi';
import { skipToken } from '@reduxjs/toolkit/query'; // 
import './dist/products.css';

export default function Products() {
    const { data: initialData = { products: [] }, isLoading: isInitialLoading } = useGetProductsQuery();

    const min = 0;
    const max = 1600;

    const [values, setValues] = useState([min, max]);
    const [triggerFilter, setTriggerFilter] = useState(false);

    const handleChange = (index, newValue) => {
        let clampedValue = isNaN(newValue) || newValue === "" ? min : Math.max(parseInt(newValue), min);

        const newValues = [...values];

        if (index === 0) {
            newValues[0] = clampedValue;
            if (newValues[1] < clampedValue + 10) {
                newValues[1] = clampedValue + 10;
            }
        } else {
            clampedValue = Math.max(clampedValue, newValues[0] + 10);
            newValues[1] = clampedValue;
        }

        setValues(newValues);
    };

    const handleKeyPress = (index, event) => {
        if (event.key === 'Enter') {
            handleChange(index, event.target.value);
        }
    };

    const { data: filteredData = { products: [] }, isLoading: isFilteredLoading } = useGetByPriceQuery(triggerFilter ? [values[0], values[1]]: 'w');

    const handleFilterClick = () => {
        setTriggerFilter(true);
    };

    const dataToDisplay = triggerFilter ? filteredData : initialData;
    const isLoading = triggerFilter ? isFilteredLoading : isInitialLoading;

    return (
        <div className="product_page">
            <div className="filter_con">
                <div className="price_filter">
                    <p className="filter">Ціна, ₴</p>
                    <div className="input_field">
                        <div className="input">
                            <label htmlFor="minPrice">від</label>
                            <input
                                type="text"
                                id="minPrice"
                                value={values[0]}
                                onChange={(e) => handleChange(0, e.target.value)}
                                onKeyPress={(e) => handleKeyPress(0, e)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="maxPrice">до</label>
                            <input
                                type="text"
                                id="maxPrice"
                                value={values[1]}
                                onChange={(e) => handleChange(1, e.target.value)}
                                onKeyPress={(e) => handleKeyPress(1, e)}
                            />
                        </div>
                    </div>
                    <ReactSlider
                        className="slider"
                        value={values}
                        min={min}
                        max={max}
                        onChange={setValues}
                    />
                </div>
                <button onClick={handleFilterClick}>Фільтрувати</button>
            </div>

            <div className="prod_view">
                <div className="prod_header">
                    <h1 className="p_page_title">Звичайне</h1>
                    <div className="basic_filter_con">
                        <div className="b_filter">Популярні</div>
                        <div className="b_filter_line"></div>
                        <div className="b_filter">Новинки</div>
                        <div className="b_filter_line"></div>
                        <div className="b_filter">
                            Від дешевих <img src="./img/Group 210.svg" alt="" />
                        </div>
                        <div className="b_filter_line"></div>
                        <div className="b_filter">
                            Від дорогих <img src="./img/Group 211.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="products_con">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : dataToDisplay.products.length ? (
                        dataToDisplay.products
                            .filter((product) => product.display)
                            .map((product) => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
