/* eslint-disable react/prop-types */

import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="container-general">
      <div className="container-itemDetail">
        <div className="producto-detalle">
          <img src={item.image} alt="" />
        </div>
        <div className="detalle-info">
          <h3 className="prod.name">{item.producto}</h3>
          <p className="prod-descripcion">{item.descripcion}</p>
          <p className="prod-categoria">{item.categoria}</p>
          <p className="prod-precio">{item.plata}</p>
        </div>
      </div>
    </div>
  );
};
