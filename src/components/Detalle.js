import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Detalle({ usuarioEditar, handleEdicion }) {
  const [values, setValues] = useState({ name: "", username: "", email: "" });
  //const [values,setValues] = useState(usuarioEditar);

  useEffect(() => {
    setValues(usuarioEditar);
  }, [usuarioEditar]);

  let url = `https://jsonplaceholder.typicode.com/users/${usuarioEditar.id}/todos`;
  let { data } = useFetch(url);
  console.log("data>>> ", data);
  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <>
      <h4>Detalle</h4>
      <form
        onSubmit={(evt) => {
          handleEdicion(evt, values);
        }}
      >
        <div className="row">
          <div className="col-sm-4">
            <div class="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div class="form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div class="form-group">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Detalle;
