import location from "../images/location-pin-svgrepo-com.svg"
import search from "../images/search-svgrepo-com.svg"
import stastic from "../images/align-top-svgrepo-com.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className='top-header'>
                <div className='location'>
                    <img src={location} alt="location" />
                    <span>Магас</span>
                </div>
                <div className='top-header-nav-bar'>
                    <Link to="/promotion"><span>Акции</span></Link>
                    <Link to="/delivery"><span>Доставка</span></Link>
                    <Link to="/forbuyers"><span>Покупателям</span></Link>
                    <Link to="/stores"><span>Магазины</span></Link>
                    <Link to="/vacancies"><span>Вакансии</span></Link>
                </div>
                <div className='top-header-phone'>
                    <span>+7(999)-999-99-99</span>
                </div>
            </div>
            <div className='bottom-header'>
                <div className="bottom-header-catalog">
                    <div className="bottom-header-logo">
                        <Link to="/">zetzet</Link>
                    </div>
                    <button className="catalog-button">
                        <Link to="/catalog">Каталог</Link>
                    </button>
                </div>
                <div className="bottom-header-search">
                    <input placeholder="Поиск по сайту" type="text" />
                    <img className="search-icon" src={search} alt="" />
                </div>
                <div className="bottom-header-blocks">
                    <div className="bottom-header-block">
                        <img src={stastic} alt="" />
                        <p>Сравнить</p>
                    </div>
                    <div className="bottom-header-block">
                        <img src={stastic} alt="" />
                        <p>Сравнить</p>
                    </div>
                    {/* <div className="bottom-header-block">
                        <img src={stastic} alt="" />
                        <p>Сравнить</p>
                    </div> */}
                    <Link to="/card">
                    <div className="bottom-header-block">
                        <img src={stastic} alt="" />
                        <div className="bottom-header-basket">
                            <p>Корзина</p>
                            <div className="bottom-header-counter">
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;