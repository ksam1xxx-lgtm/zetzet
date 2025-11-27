import React from 'react';
import Laptop from "../images/1843340.200x0.png"
import Basket from "../images/icons8-basket-24.png"

const Body = () => {

    return (
        <div className='body'>
            <div className='product-card'>
                <div className='laptop'>
                    <img src={Laptop} alt="" />
                </div>
                <div className='description'>
                    <p className='description-p'>Apple MacBook Pro 16" <br/> 36GB/1TB (2024 M4 Pro Max) MX2V3, Silver</p>
                </div>
                <div className='parent-price'>
                    <div className='price'>
                        <h3 className='main-price'>294 800 Р</h3>
                        <p className='old-price'>324 000 Р</p>
                    </div>
                    <button className='basket-btn'><img src={Basket} alt="" /></button>
                </div>
            </div>
        </div>
    )
}


export default Body