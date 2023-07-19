import { Cart } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import mine from './images/logo-mine.png';
import './NavBar.css'

export const HeaderEco = () =>{
    return (
        <div>
            <header className="header">
                <Link to="/"><img src={mine} alt="logo mineshop" /></Link>
                <div className='container-menu'>
                    <ul className='nav-bar'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Categories">Categories</Link></li>
                        <li><Link to="/Categories/Armas">Weapons</Link></li>
                        <li><Link to="/Categories/Herramientas">Tools</Link></li>
                        <li><Link to="/Categories/Objetos">Objects</Link></li>
                        <li><Link to="/Categories/Minerales">Minerals</Link></li>
                    </ul>
                    <Cart/>
                </div>
            </header>
        </div>
    );
};