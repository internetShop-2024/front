import ReactSlider from 'react-slider'
import { ProductCard } from '../../components/ProductCard/productCard'
import './dist/products.css'

import { useState } from 'react'

export default function Products(){

    const min = 0
    const max = 1600

    const[values, setValues] = useState([min, max])

    const handleChange = (index, newValue) => {
        // Ensure the new value is not below the minimum
        const clampedValue = Math.max(newValue, min);

        // Create a new values array with the updated value
        const newValues = [...values];
        newValues[index] = clampedValue;

        setValues(newValues);
    };

    const handleKeyPress = (index, event) => {
        if (event.key === 'Enter') {
            handleChange(index, parseInt(event.target.value));
        }
    };

    return(
        <div className='product_page'>
            <div className="filter_con">
                <div className="price_filter">
                    <p className='filter'>Ціна, ₴ </p>
                    <div className="input_field">
                        <div className="input">
                            <label htmlFor=""> від</label>
                            <input type="texxt" value={values[0]}  onChange={(e) => handleChange(0, parseInt(e.target.value))}/>
                        </div>
                        <div className="input">
                            <label htmlFor=""> до</label>
                            <input type="text" value={values[1]}  onChange={(e) => handleChange(1, parseInt(e.target.value))}/>
                        </div>
                        
                    </div>
                    <ReactSlider onChange={setValues} className={"slider"} value={values} min = {min} max = {max}/>
                </div>
            </div>

            <div className="prod_view">
                <div className="prod_header">
                    <h1 className='p_page_title'>Звичайне</h1>
                    <div className="basic_filter_con">
                        <div className='b_filter'>Популярні</div>
                        <div className="b_filter_line"></div>
                        <div className='b_filter'>Новинки</div>
                        <div className="b_filter_line"></div>
                        <div className='b_filter'>Від дешевих <img src="./img/Group 210.svg" alt="" /></div>
                        <div className="b_filter_line"></div>

                        <div className='b_filter'>Від дорогих <img src="./img/Group 211.svg" alt="" /></div>
                    </div>
                </div>
                <div className="products_con">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>

                </div>
            </div>
            
        </div>
    )

}