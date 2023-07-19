import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */


export const Item = ({producto}) =>{
    return(
        <div className="producto">
            <img src={producto.image} alt=""/>
            <div className="producto-info">
                <h3>{producto.producto}</h3>   
                <p>Precio: {producto.plata}</p>
                <div className="container-btn">
                    <Link className="ver" to={`/item/${producto.id}`}>Ver más</Link>
                </div>  
            </div>
        </div>
    )
}
