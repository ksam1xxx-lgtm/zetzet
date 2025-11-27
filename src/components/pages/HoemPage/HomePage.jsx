import style from "./style.module.css"
import arrow from "../../../images/arrow-right-svgrepo-com.svg"
import notebook from "../../../images/347364047099323.webp"
import phone from "../../../images/Poco-X3-Pro-explodes-feat..webp"
import tablet from "../../../images/ipad-finish-select-202503-pink-wifi_FMT_WHH.jpg"
import { useState } from "react";

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [notebook, phone, tablet]

    const handleNextSlide = () => {
        setCurrentSlide((nextState) => nextState === slides.length -1 ? 0 : nextState + 1)
    }

    const handlePrevSlide = () => {
        setCurrentSlide((prevState) => prevState === slides.length -1 ? 0 : prevState + 1)
    }

    const handleDotClick = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className={style.homepage}>
            <div className={style.slider}>
                <div onClick={handlePrevSlide} className={style.arrow_left_block}>
                    <img src={arrow} alt="prev" />
                </div>
                <div className={style.content}>
                    <img src={slides[currentSlide]} alt="slider-image" />
                </div>
                <div onClick={handleNextSlide} className={style.arrow_right_block}>
                    <img src={arrow} alt="next" />
                </div>
            </div>
            <div className={style.dots}>
                {slides.map((item, index) => {
                    return <div onClick={() => handleDotClick(index)} style={{backgroundColor : index === currentSlide && "black" }} className={style.dot}></div>
                })}
            </div>
        </div>
    );
};

export default HomePage;