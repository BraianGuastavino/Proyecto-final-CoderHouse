import "./contacto.css"
import { useForm } from "react-hook-form";

export const Contacto = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (data) =>{
    console.log(data);
  }

  return (
    <div className="container-contacto">
      <h1>Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
        <input type= "email" placeholder="Ingresa tu email" {...register("email")}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
