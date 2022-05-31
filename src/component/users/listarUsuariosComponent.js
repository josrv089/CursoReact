import React, { useState } from "react";
import DataGrid from "react-data-grid";

const ListarUsuariosComponent = ({valores, irFormulario}) => {
  const columns = [
    { key: "id", name: "ID" },
    { key: "name", name: "Nombre" },
    { key: "email", name: "Correo" },
    { key: "gender", name: "Genero" },
    { key: "status", name: "Estado" },
  ];

  const handleAgregar = () => {
   irFormulario(null);
  };

  const handleModificar = (row) => {
    console.log(row)
    irFormulario(row.id);
   };

  return (
    <>
      <form>
        <h3>Lista de Usuarios</h3>
        <div>
            <button className="button button-blue" onClick={handleAgregar}>
              Nuevo usuario
            </button>
          </div>
        <DataGrid columns={columns} rows={valores} onRowDoubleClick={handleModificar}/>
      </form>
    </>
  );
};

export default ListarUsuariosComponent;
