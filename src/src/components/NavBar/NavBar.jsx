import { Cart } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from './images/LA-Comic.png';
import './NavBar.css'

export const HeaderEco = () =>{
    return (
        <div>
            <header className="header">
                <div className="logo-cart">
                    <Link to="/"><img src={logo} alt="logo mineshop" /></Link>
                    <li><Cart/></li>
                </div>
                <div className='container-menu'>
                    <ul className='nav-bar'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Categorias">Categorias</Link></li>
                        <li><Link to="/Categorias/Comic">Comics</Link></li>
                        <li><Link to="/Categorias/Manga">Mangas</Link></li>
                        <li><Link to="/Categorias/Libro">Libros</Link></li>
                        <li><Link to="/Contacto">Contacto</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};