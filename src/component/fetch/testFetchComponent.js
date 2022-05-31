import React, { useState } from "react";
import {fetchServiceBasic, fetchService} from "../../services/fetch/serviceFetch"
const TestFetchComponent = () => {
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
    console.log("Consumo fetchServiceBasic")
    console.log("/*****Se consultan los usuarios*****/");
    respuesta = await fetchServiceBasic("users","GET");
    console.log(respuesta);
    console.log("/*****Insertar un usuarios*****/");
    respuesta = await fetchServiceBasic("users","POST",usuario);
    console.log(respuesta);
    id = respuesta ? respuesta.data.id:undefined;
    console.log("/*****Consultar un usuarios*****/");
    respuesta = await fetchServiceBasic(`users/${id}`,"GET");
    console.log(respuesta);
    console.log("/*****Modificar un usuarios*****/");
    usuario.name="Prueba ICE Modificado"
    usuario.gender="female"
    respuesta = await fetchServiceBasic(`users/${id}`,"PUT",usuario);
    console.log(respuesta);
    console.log("/*****Consultar un usuarios*****/");
    respuesta = await fetchServiceBasic(`users/${id}`,"GET");
    console.log(respuesta);
    console.log("/*****Eliminar un usuarios*****/");
    respuesta = await fetchServiceBasic(`users/${id}`,"DELETE");
    console.log(respuesta);
    console.log("/*****Consultar un usuarios*****/");
    respuesta = await fetchServiceBasic(`users/${id}`,"GET");
    console.log(respuesta);
    
  }



  
  const handleClick = async (evt) => {
    let respuesta;
    let id;
    console.log("Consumo fetchService");
    let usuario = {
      name: "Nordyn Vargas",
      email: form.email,
      gender: "male",
      status: "active",
    };
    console.log("/*****Se consultan los usuarios*****/");
    respuesta = await fetchService("users", "GET");
    console.log(respuesta);
    console.log("/*****Se agrega el usuario*****/");
    respuesta = await fetchService("users", "POST", usuario);
    console.log(respuesta);
    id = !respuesta.error ? respuesta.response.id: undefined;
    console.log(`/*****Se consultan el usuario agregado con id ${id}*****/`);
    respuesta = await fetchService(`users/${id}`, "GET");
    console.log(respuesta);
    console.log(`/*****Se modifica el usuario agregado con id ${id}*****/`);
    usuario.name = "Alex Vargas";
    usuario.status = "inactive";
    respuesta = await fetchService(`users/${id}`, "PUT", usuario);
    console.log(respuesta);
    console.log(`/*****Se consultan el usuario modificado con id ${id}*****/`);
    respuesta = await fetchService(`users/${id}`, "GET");
    console.log(respuesta);
    console.log(`/*****Se elimina el usuario con id ${id}*****/`);
    respuesta = await fetchService(`users/${id}`, "DELETE");
    console.log(respuesta);
    console.log(`/*****Se consultan el usuario eliminado con id ${id}*****/`);
    respuesta = await fetchService(`users/${id}`, "GET");
    console.log(respuesta);
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Prueba de servicios Fetch</h1>
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
          <button type="submit">Fetch basic</button>
          <button type="button" onClick={handleClick}>Fetch</button>
        </div>
      </form>
    </>
  );
};

export default TestFetchComponent;
