import React, { useState } from "react";

const FormularioComponent = ({ salir, usuario = {} }) => {
  console.log(usuario);
  const [values, setValues] = useState(usuario);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validaciones = () => {
    let errores = {};
    if (!values.name || values.name.trim() === "") {
      errores.name = "El campo nombre es requerido";
    }
    if (values.name && values.name.trim().length > 50) {
      errores.name = "El campo nombre tiene una longitud máxima de 50 letras.";
    }
    if (!values.email || values.email.trim() === "") {
      errores.email = "El campo email es requerido";
    }
    if (
      values.email &&
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
    ) {
      errores.email = "El formato del email es incorrecto.";
    }
    if (!values.gender || values.gender.trim() === "") {
      errores.gender = "El campo genero es requerido";
    }
    if (!values.status) {
      errores.status = "El campo estatus es requerido";
    }

    setErrors(errores);
    return Object.keys(errores).length;
  };

  const hadeleSubmit = (evt) => {
    setIsSubmitting(true)
    evt.preventDefault();
    let cantidadErrores = validaciones();
    if (cantidadErrores === 0) {
        setTimeout(() => {
            alert(`Se envia el formulario ${JSON.stringify(values)}`);
            setIsSubmitting(false);
        }, 5000);
      
    } else {
      setTouched({
        name: true,
        email: true,
        gender: true,
        status: true,
      });
    }
  };
  const hadeleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (evt) => {
    validaciones();
    setTouched({
      ...touched,
      [evt.target.name]: true,
    });
  };

  const handleSalir = (evt) => {
    salir(values);
  };

  return (
    <>
      <form onSubmit={hadeleSubmit}>
        <h3>Formulario</h3>
        <div>
          <label className="label" value="Nombre" htmlFor="name">
            Nombre
            <input
              className="input"
              id="name"
              name="name"
              value={values.name}
              type="text"
              onChange={hadeleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            ></input>
          </label>
        </div>
        <div>
          {errors.name && touched.name && (
            <label className="field-error">{errors.name}</label>
          )}
        </div>
        <div>
          <label className="label" value="Email" htmlFor="email">
            Email
            <input
              className="input"
              id="email"
              name="email"
              value={values.email}
              type="text"
              onChange={hadeleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            ></input>
          </label>
        </div>
        <div>
          {errors.email && touched.email && (
            <label className="field-error">{errors.email}</label>
          )}
        </div>
        <div>
          <label className="label" value="Genero" htmlFor="gender">
            Genero
            <select
              className="input"
              id="gender"
              name="gender"
              value={values.gender}
              type="text"
              onChange={hadeleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            >
              <option value=""> Seleccione</option>
              <option value="female"> Mujer</option>
              <option value="male"> Hombre</option>
            </select>
          </label>
        </div>
        <div>
          {errors.gender && touched.gender && (
            <label className="field-error">{errors.gender}</label>
          )}
        </div>

        <div>
          <label className="label" htmlFor="status">
            Estado
            <div>
              <label className="radio" htmlFor="status">
                Activo
                <input
                  name="status"
                  value="active"
                  type="radio"
                  checked={values.status === "active"}
                  onChange={hadeleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                ></input>
              </label>
              <label className="radio" htmlFor="status">
                Inactivo
                <input
                  name="status"
                  value="inactive"
                  type="radio"
                  checked={values.status === "inactive"}
                  onChange={hadeleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                ></input>
              </label>
            </div>
          </label>
        </div>
        <div>
          {errors.status && touched.status && (
            <label className="field-error">{errors.status}</label>
          )}
        </div>

        <div>
          <button className="button button-green" type="submit" disabled={isSubmitting}>
            Enviar
          </button>
          <button
            className="button button-red"
            type="button"
            onClick={handleSalir}
            disabled={isSubmitting}
          >
            Salir
          </button>
        </div>
      </form>
    </>
  );
};

export default FormularioComponent;
