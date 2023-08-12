import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { Presentacion } from './Presentacion';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config";


export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("productos");
    const categoria = useParams().categoria;
    

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
        getDocs(q)
            .then((res)=>{
                setProductos(
                    res.docs.map((doc)=>{
                        return {...doc.data(), id:doc.id}
                    })
                )
            })
    }, [categoria])
    

    return(
        <section className='container-principal'>
            <Presentacion/>
            <ItemList productos={productos} titulo={titulo}/>
        </section>
    )
}