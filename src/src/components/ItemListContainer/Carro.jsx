import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Carro.css"; // Import the separate CSS file

export const Carro = () => {
    const { carro, precioTotal, vaciarCarro } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarro();
    };

    return (
        <div className="container-general">
            <div className="container-carro">
                <h1>Carrito de compras</h1>
                {carro.map((prod) => (
                    <div key={prod.id} className="producto">
                        <h2>{prod.producto}</h2>
                        <p>Precio por unidad: ${prod.plata}</p>
                        <p>Precio por total: ${prod.plata * prod.cantidad}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>
                ))}
                {carro.length !== 0 ? (
                    <div className="info-container">
                        <h2>Precio total: ${precioTotal()}</h2>
                        <button className="vaciar-button" onClick={handleVaciar}>
                            Vaciar
                        </button>
                        <Link to="/checkout" className="finalizar-button">
                            Finalizar su compra
                        </Link>
                    </div>
                ) : (
                    <h2>El carro está vacío</h2>
                )}
            </div>
        </div>
    );
};