import React, { useState, useEffect } from "react";
import FormularioUsuarioComponent from "./formularioUsuarioComponent";
import ListarUsuariosComponent from "./listarUsuariosComponent";
import {
  listarUsuarios,
  consultarUsuario,
  agregarUsuario,
  modificarUsuario,
  eliminarUsuario,
} from "../../services/user/userService";
import { agregarMensaje } from "../../mensaje/mensaje";
import FormularioUsuarioFormikComponent from "./formularioUsuarioFormikComponent";

const UsarioComponent = () => {
  const [listado, setListado] = useState(true);
  const [listaUsuarios, setListaUsuarios] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({});

  const handleListar = async () => {
    let consulta = await listarUsuarios();
    if (!consulta.error) {
      setListaUsuarios(consulta.data);
    } else {
      agregarMensaje(setMensaje, consulta.msg, setError, consulta.error);
    }
    setListado(true);
  };

  const handleAgregar = async (user) => {
    let consulta = await agregarUsuario(user);
    if (!consulta.error) {
      handleListar();
    }
    agregarMensaje(setMensaje, consulta.msg, setError, consulta.error);
  };

  const handleModificar = async (id, user) => {
    let consulta = await modificarUsuario(id, user);
    if (!consulta.error) {
      handleListar();
    }
    agregarMensaje(setMensaje, consulta.msg, setError, consulta.error);
  };

  const handleFormulario = async (id) => {
    if (id) {
      let consulta = await consultarUsuario(id);
      if (!consulta.error) {
        setUsuario(consulta.data);
      }
      agregarMensaje(setMensaje, consulta.msg, setError, consulta.error);
    } else {
      setUsuario({ name: "", email: "", gender: "", status: "" });
    }
    setListado(false);
  };

  const handleRegresar = async (id) => {
    setListado(true);
  };

  const handleEliminar = async (id) => {
    let consulta = await eliminarUsuario(id);
    if (!consulta.error) {
      handleListar();
    }
    agregarMensaje(setMensaje, consulta.msg, setError, consulta.error);
  };

  useEffect(() => {
    handleListar();
  }, [null]);

  return (
    <>
      <h1>Mantenimiento de usuarios</h1>
      {listado ? (
        <ListarUsuariosComponent
          valores={listaUsuarios}
          irFormulario={handleFormulario}
        ></ListarUsuariosComponent>
      ) : (
        <>
          <FormularioUsuarioFormikComponent
            regresar={handleRegresar}
            agregarUsario={handleAgregar}
            modificarUsario={handleModificar}
            eliminarUsario={handleEliminar}
            usuario={usuario}
          ></FormularioUsuarioFormikComponent>
          <FormularioUsuarioComponent
            regresar={handleRegresar}
            agregarUsario={handleAgregar}
            modificarUsario={handleModificar}
            eliminarUsario={handleEliminar}
            usuario={usuario}
          ></FormularioUsuarioComponent>
        </>
      )}
      <label className={error ? "error" : "succes"}>{mensaje}</label>
    </>
  );
};

export default UsarioComponent;
