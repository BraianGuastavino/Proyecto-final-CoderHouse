import { Cart } from './CartWidget/CartWidget';
import mine from './images/logo-mine.png';
import './NavBar.css'

export const HeaderEco = () =>{
    return (
        <div>
            <header className="header">
                <img src={mine} alt="logo mineshop" />
                <div className='container-menu'>
                    <ul className='nav-bar'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <Cart/>
                </div>
            </header>
        </div>
    );
};