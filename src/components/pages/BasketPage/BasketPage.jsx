import style from './style.module.css'
import Basket from "../../../images/icons8-basket-24.png"
import MacBook from "../../../images/1843340.200x0.png"
import ThinkPad from "../../../images/5_lenovothinkpadt14_gen_421hd0077us.jpg"
import MagicBook from "../../../images/HonorBook.webp"
import Dayson from "../../../images/447637-01.jpg"
import DaysonOtp from "../../../images/OtpDayson.jpg"
import Iphone from "../../../images/d8bd0dd74bc298feec877c076eaff574.jpeg"
import Poco from "../../../images/307942998_996209ea2d090ff95a479309bd5764e1.jpg"
import { useState } from "react"

const BasketPage = () => {
    const query = [
        {name: "MacBook 16 Pro", type: "laptops", price: 99800, oldPrice: 112000, description: "Apple MacBook Pro 1636GB/1TB (2024 M4 Pro Max) MX2V3, Silver", img: MacBook},
        {name: "ThinkPad", type: "laptops", price: 20000, oldPrice: 29999, description: "ThinkPad 500GB/1TB 2022, Black", img: ThinkPad},
        {name: "Honor MagicBook x 16 Pro", type: "laptops", price: 67000, oldPrice: 74200, description: "MagicBook X 16 Pro 500GB, Silver", img: MagicBook},
        {name: "Пылесос", type: "homehold", price: 27000, oldPrice: 35000, description: "Dayson turbo+ / black&silver", img: Dayson},
        {name: "Отпариватель", type: "homehold", price: 45000, oldPrice: 51000, description: "Dayson Fast & Soft Clean, black", img: DaysonOtp},
        {name: "Iphone 14", type: "phones", price: 66000, oldPrice: 71000, description: "Iphone 14 128GB, Midnight black", img: Iphone},
        {name: "Poco x4 5g ultra pro", type: "phones", price: 40000, oldPrice: 45000, description: "Взрывоопасно...", img: Poco},
    ];










    return (
        <div className={style.parentDiv}>
            
            <div className={style.basketParentDiv}>
                <h3 className={style.h3Basket}>Корзина</h3>

                {query.map((products) => {
                    return (
                        <div className={style.productCard}>
                            <div>
                                <img className={style.imgs} src={products.img} alt="" />
                            </div>
                            <div>
                                <h3 className={style.name}>{products.name} <br /></h3>
                                <p>{products.description}</p>
                            </div>
                            <div className={style.counter}>
                                <button className={style.minus}>-</button>
                                <p className={style.number}>1</p>
                                <button className={style.plus}>+</button>
                            
                                <h3 className={style.mainPrice}>{products.price} Р</h3>
                                <p className={style.oldPrice}>{products.oldPrice} Р</p>
                            </div>
                    </div>
                    )
                })}
            </div>
            <div className={style.panel}>
                <h3 className={style.adress}>Выбрать адрес доставки</h3>
                <div className={style.items}>
                    <p>Товары, 2 шт.</p>
                    <p>320 699 ₽</p>
                </div>
                <div className={style.result}>
                    <h2>Итого</h2>
                    <h2>197 151 ₽</h2>
                </div>
                <button className={style.orderBtn}>Заказать</button>
                <div className={style.checkbox}>
                    <input type="checkbox" />
                    <p>Соглашаюсь с правилами пользования торговой площадкой и возврата</p>
                </div>
            </div>
        </div>
    )
}

export default BasketPage