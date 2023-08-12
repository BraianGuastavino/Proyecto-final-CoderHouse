import data from "../data/DATA.json";

export const pedirDatos = () => {
    return new Promise((resolve) => {
        resolve(data);
    })
}

export const pedirId = (id) =>{
    return new Promise((resolve,reject)=>{
        const item = data.find((el)=> el.id === id)

        if(item){
            resolve(item)
        }else{
            reject({
                error: "No se encuentra"
            })
        }
    })
}