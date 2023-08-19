import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc} from "firebase/firestore"
import { db } from "../../Firebase/config"


export const Checkout = () => {

    const [pedidoId, setPedidoId] = useState();
    const { carro, precioTotal, vaciarCarro } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const compra = (data) => {
        const pedido ={
            cliente: data,
            productos: carro,
            total: precioTotal()
        }
        console.log(pedido)
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc)=>{
                setPedidoId(doc.id);
                vaciarCarro();
            })
    }

    if (pedidoId){
        return (
            <div className="container-contacto">
                <h1>Gracias por comprar</h1>
                <p>Número de la compra: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container-contacto">
            <h1>Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(compra)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu email" {...register("email")} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};
