import { useEffect, useState } from "react"
/* eslint-disable react/prop-types */

import { pedirId } from "../../helpers/pedirDatos";
import { ItemDetail } from "./itemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () =>{

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirId(Number(id))
            .then((res)=>{
                setItem(res);
            })
    }, [id])
    

    return(
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}