import style from "./style.module.css"
import Basket from "../../../images/icons8-basket-24.png"
import MacBook from "../../../images/1843340.200x0.png"
import ThinkPad from "../../../images/5_lenovothinkpadt14_gen_421hd0077us.jpg"
import MagicBook from "../../../images/HonorBook.webp"
import Dayson from "../../../images/447637-01.jpg"
import DaysonOtp from "../../../images/OtpDayson.jpg"
import Iphone from "../../../images/d8bd0dd74bc298feec877c076eaff574.jpeg"
import Poco from "../../../images/307942998_996209ea2d090ff95a479309bd5764e1.jpg"
import { useState } from "react"

const Catalog = () => {
    const query = [
        {name: "MacBook 16 Pro", type: "laptops", price: 99800, oldPrice: 112000, description: "Apple MacBook Pro 1636GB/1TB (2024 M4 Pro Max) MX2V3, Silver", img: MacBook},
        {name: "ThinkPad", type: "laptops", price: 20000, oldPrice: 29999, description: "ThinkPad 500GB/1TB 2022, Black", img: ThinkPad},
        {name: "Honor MagicBook x 16 Pro", type: "laptops", price: 67000, oldPrice: 74200, description: "MagicBook X 16 Pro 500GB, Silver", img: MagicBook},
        {name: "Пылесос", type: "homehold", price: 27000, oldPrice: 35000, description: "Dayson turbo+ / black&silver", img: Dayson},
        {name: "Отпариватель", type: "homehold", price: 45000, oldPrice: 51000, description: "Dayson Fast & Soft Clean, black", img: DaysonOtp},
        {name: "Iphone 14", type: "phones", price: 66000, oldPrice: 71000, description: "Iphone 14 128GB, Midnight black", img: Iphone},
        {name: "Poco x4 5g ultra pro max old spice chicken McNuggets Competition", type: "phones", price: 40000, oldPrice: 45000, description: "Взрывоопасно...", img: Poco},
    ];

    const [products, setProducts] = useState(query)
    const [price, setPrice] = useState({
        maxPrice: "",
        minPrice: ""
    })

    // Фильтр по категории
    const filtProduct = (type) => {
        if (type === "all") {
            setProducts(query)
        } else {
            const res = query.filter(item => item.type === type)
            setProducts(res)
        }
    }

    // Фильтр по цене
    const filtPrice = () => {
        const min = Number(price.minPrice)
        const max = Number(price.maxPrice)

        const result = query.filter(product => {
            return (
                (price.minPrice === "" || product.price >= min) &&
                (price.maxPrice === "" || product.price <= max)
            )
        })

        setProducts(result)
    }

    return (
        <div className={style.body}> 

            <form className={style.filters}>
                    <select onChange={(e) => filtProduct(e.target.value)} name="catalog">
                        <option value="all">Все</option>
                        <option value="laptops">Ноутбуки</option>
                        <option value="homehold">Бытовая техника</option>
                        <option value="phones">Телефоны</option>
                    </select>

                    <input
                        onChange={(e) => setPrice(prev => ({ ...prev, minPrice: e.target.value }))}
                        type="number"
                        placeholder="Мин. цена"
                    />
                    <input
                        onChange={(e) => setPrice(prev => ({ ...prev, maxPrice: e.target.value }))}
                        type="number"
                        placeholder="Макс. цена"
                    />
                    
                    <button className={style.applyBtn} onClick={filtPrice}>Применить</button>
            </form>

            {products.map((product, idx) => (
                <div key={idx} className={style.productCard}>
                    <div className={style.laptop}>
                        <img className={style.img} src={product.img} alt="" />
                    </div>
                    <div className={style.description}>
                        <p className={style.description_p}>{product.name} <br/> {product.description}</p>
                    </div>
                    <div className={style.parentPrice}>
                        <div className={style.price}>
                            <h3 className={style.mainPrice}>{product.price} Р</h3>
                            <p className={style.oldPrice}>{product.oldPrice} Р</p>
                        </div>
                        <button className={style.basketBtn}><img src={Basket} alt="" /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Catalog
