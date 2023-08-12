/* eslint-disable react/prop-types */

export const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

  return (
    <div className="product-details">
      <div className="item-count">
        <button className="count-btn" onClick={handleRestar}>-</button>
        <span className="count">{cantidad}</span>
        <button className="count-btn" onClick={handleSumar}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

