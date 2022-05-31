import React, { useState } from "react";
import {axiosServiceBasic, axiosService} from "../../services/axios/serviceAxios"
const TestAxiosComponent = () => {
  const [form, setForm] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (evt) => {
    let respuesta;
    let id;
    let usuario = {
        name: "Ejemplo ICE",
        email: form.email,
        gender: "male",
        status: "active",
      };
    evt.preventDefault();
    console.log("Consumo axiosServiceBasic")
    console.log("/*****Se consultan los usuarios*****/");
    respuesta = await axiosServiceBasic("users","GET");
    console.log(respuesta);
    console.log("/*****Insertar un usuarios*****/");
    respuesta = await axiosServiceBasic("users","POST",usuario);
    console.log(respuesta);
    id = respuesta ? respuesta.data.data.id: undefined;
    console.log("/*****Consultar un usuarios*****/");
    respuesta = await axiosServiceBasic(`users/${id}`,"GET");
    console.log(respuesta);
    console.log("/*****Modificar un usuarios*****/");
    usuario.name="Prueba ICE Modificado"
    usuario.gender="female"
    respuesta = await axiosServiceBasic(`users/${id}`,"PUT",usuario);
    console.log(respuesta);
    console.log("/*****Consultar un usuarios*****/");
    respuesta = await axiosServiceBasic(`users/${id}`,"GET");
    console.log(respuesta);
    console.log("/*****Eliminar un usuarios*****/");
    respuesta = await axiosServiceBasic(`users/${id}`,"DELETE");
    console.log(respuesta);
    console.log("/*****Consultar un usuarios*****/");
    respuesta = await axiosServiceBasic(`users/${id}`,"GET");
    console.log(respuesta);
    
  }



  
  const handleClick = async (evt) => {
    let respuesta;
    let id;
    console.log("Consumo axiosService");
    let usuario = {
      name: "Nordyn Vargas",
      email: form.email,
      gender: "male",
      status: "active",
    };
    console.log("/*****Se consultan los usuarios*****/");
    respuesta = await axiosService("users", "GET");
    console.log(respuesta);
    console.log("/*****Se agrega el usuario*****/");
    respuesta = await axiosService("users", "POST", usuario);
    console.log(respuesta);
    id = respuesta.response ? respuesta.response.id:undefined;
    console.log(`/*****Se consultan el usuario agregado con id ${id}*****/`);
    respuesta = await axiosService(`users/${id}`, "GET");
    console.log(respuesta);
    console.log(`/*****Se modifica el usuario agregado con id ${id}*****/`);
    usuario.name = "Alex Vargas";
    usuario.status = "inactive";
    respuesta = await axiosService(`users/${id}`, "PUT", usuario);
    console.log(respuesta);
    console.log(`/*****Se consultan el usuario modificado con id ${id}*****/`);
    respuesta = await axiosService(`users/${id}`, "GET");
    console.log(respuesta);
    console.log(`/*****Se elimina el usuario con id ${id}*****/`);
    respuesta = await axiosService(`users/${id}`, "DELETE");
    console.log(respuesta);
    console.log(`/*****Se consultan el usuario eliminado con id ${id}*****/`);
    respuesta = await axiosService(`users/${id}`, "GET");
    console.log(respuesta);
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Prueba de servicios Axios</h1>
        <div>
          <label value="Nombre" htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Axios basic</button>
          <button type="button" onClick={handleClick}>Axios</button>
        </div>
      </form>
    </>
  );
};

export default TestAxiosComponent;
