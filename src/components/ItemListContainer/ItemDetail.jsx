/* eslint-disable react/prop-types */

import { ItemCount } from "./ItemCount";
import { useContext, useState } from "react";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ item }) => {

  const {carro, agregarAlCarro} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className="container-general">
      <div className="container-itemDetail">
        <div className="producto-detalle">
          <img src={item.image} alt="Producto" />
        </div>
        <div className="detalle-info">
          <h3 className="prod-name">{item.producto}</h3>
          <p className="prod-categoria">Categoría: {item.categoria}</p>
          <p className="prod-descripcion">{item.descripcion}</p>
          <p className="prod-precio">${item.plata}</p>
          <div className="item-count">
            <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarAlCarro(item, cantidad)}} />
          </div>
        </div>
      </div>
    </div>
  );
};
