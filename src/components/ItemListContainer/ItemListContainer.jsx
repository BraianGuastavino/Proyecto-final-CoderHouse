import './ItemListContainer.css'
import { pedirDatos } from '../../helpers/pedirDatos';
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList';
import { Presentacion } from './Presentacion';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("productos");

    useEffect(() => {
      pedirDatos()
        .then((res)=>{
            if (categoria){
                setProductos(res.filter((prod)=> prod.categoria === categoria));
                setTitulo(categoria);
            }else{
                setProductos(res)
                setTitulo("Productos");
            }   
        })
    }, [categoria])
    

    return(
        <section className='container-principal'>
            <Presentacion/>
            <ItemList productos={productos} titulo={titulo}/>
        </section>
    )
}