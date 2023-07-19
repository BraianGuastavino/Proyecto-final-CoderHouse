/* eslint-disable react/prop-types */

import { Item } from "./Item";


export const ItemList = ({productos, titulo}) =>{
    return(
        <div className="container-productos">
            <h2>Lista de {titulo}</h2>
            <div className="grid-container">
                {productos.map((prod)=><Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}