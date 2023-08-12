import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


export const Cart = () => {

    const { cantCarro } = useContext(CartContext);

    return (
        <Link to="/carrito">
            <div className="icon-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="number">{cantCarro()}</span>
            </div>
        </Link>
    )
}
