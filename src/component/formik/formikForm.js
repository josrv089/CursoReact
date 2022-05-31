import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const FormikFormComponent = ({ user = {} }) => {
  const validaciones = Yup.object({
    name: Yup.string()
      .required("Se necesita un nombre")
      .max(30, "Lo langitud maxima es de 30.")
      .min(5, "Lo langitud mínima es de 5.")
      .test(
        "prueba",
        "El nombre no puede ser Nordyn",
        (value) => value !== "Nordyn"
      ),
    email: Yup.string()
      .required("El email es requerido")
      .email("El formato del email es incorrecto.")
      .max(100, "Longitud incorrecta."),
    gender: Yup.string().required("El genero es requerido"),
    status: Yup.string().required("El status es requerido"),
    edad: Yup.number().min(18, "La edad minima es de 18 años."),
  });

  console.log(validaciones);

  const enviar = (values, setSubmitting) => {
    setTimeout(() => {
      alert("Prueba" + JSON.stringify(values));
      setSubmitting(false);
    }, 5000);
  };

  return (
    <>
      <Formik
        initialValues={user}
        onSubmit={(values, { setSubmitting }) => {
          enviar(values, setSubmitting);
        }}
        validationSchema={validaciones}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h1>Formulario Formik 1</h1>
            <div>
              <label className="label" htmlFor="name">
                Nombre
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                ></input>
              </label>

              <div>
                {errors.name && touched.name && (
                  <label className="field-error">{errors.name}</label>
                )}
              </div>
            </div>

            <div>
              <label className="label" htmlFor="edad">
                Edad
                <input
                  className="input"
                  type="number"
                  name="edad"
                  id="edad"
                  value={values.edad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                ></input>
              </label>

              <div>
                {errors.edad && touched.edad && (
                  <label className="field-error">{errors.edad}</label>
                )}
              </div>
            </div>

            <div>
              <label className="label" htmlFor="email">
                Email
                <input
                  className="input"
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                ></input>
              </label>

              <div>
                {errors.email && touched.email && (
                  <label className="field-error">{errors.email}</label>
                )}
              </div>
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
                  onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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

            <button
              className="button button-green"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikFormComponent;
