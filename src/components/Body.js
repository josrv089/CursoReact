import { useEffect, useState } from "react";
import Detalle from "./Detalle";
import Listado from "./Listado";
import User from "./User";

function Body() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [usuarioEditar, setUsuarioEditar] = useState(null);

  const handleEditar = (id) => {
    let user = listaUsuarios.find((element) => {
      return element.id === id;
    });
    setUsuarioEditar(user);
  };


  const handleEdicion = (evt,values) =>{
      evt.preventDefault();
      console.log("User editado : ",values);
      const newArreglo = listaUsuarios.map((element)=>{
          if(element.id === values.id){
              return{id:values.id,name:values.name,username:values.username,email:values.email};
          }
          return element;
      })
      setListaUsuarios(newArreglo);
  }

  useEffect(() => {
    const getData = async (url) => {
      let respuesta = await fetch(url);
      let json = await respuesta.json();
      setListaUsuarios(json);
    };
    let url = "https://jsonplaceholder.typicode.com/users";
    getData(url);
  }, []);

  return (
    <>
      <h3>Body de la aplicación</h3>
      <Listado
        listaUsuarios={listaUsuarios}
        handleEditar={handleEditar}
      ></Listado>
      {usuarioEditar != null && (
        <Detalle usuarioEditar={usuarioEditar} handleEdicion={handleEdicion}></Detalle>
      )}

      {/* <User ></User> */}
    </>
  );
}

export default Body;
