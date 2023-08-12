/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carroInicial = JSON.parse(localStorage.getItem("carro")) || [];

export const CartProvider = ( {children} ) => {
    const [carro, setCarro] = useState(carroInicial);

    const agregarAlCarro = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const newCarro = [...carro];
        const find = newCarro.find((producto) => producto.id === itemAgregado.id);

        if (find) {
            find.cantidad += cantidad;
            setCarro(newCarro);
        } else {
            newCarro.push(itemAgregado)
        }
        setCarro(newCarro);
    }

    const cantCarro = () => {
        return carro.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carro.reduce((acc, prod) => acc + prod.plata * prod.cantidad, 0)
    }

    const vaciarCarro = () => {
        setCarro([])
    }

    useEffect(()=>{
        localStorage.setItem("carro", JSON.stringify(carro))
    },[carro])

    return (
        <CartContext.Provider value={ {carro, agregarAlCarro, cantCarro, precioTotal, vaciarCarro} }>
            {children}
        </CartContext.Provider>
    )


}