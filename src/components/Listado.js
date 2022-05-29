function Listado({ listaUsuarios,handleEditar }) {
  console.log(listaUsuarios);
  return (
    <>
      <h4>Lista de la aplicación</h4>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Usuario</th>
            <th scope="col">Correo</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((element) => (
            <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td>
                <button type="button" class="btn btn-primary sm btn-sm" onClick={()=>{handleEditar(element.id)}}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listado;
