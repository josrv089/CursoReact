import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Formik2FormComponent = ({ user = {} }) => {
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
        {({ values, isSubmitting }) => (
          <Form>
            <h1>Formulario Formik 2</h1>
            <div>
              <label className="label" htmlFor="name">
                Nombre
                <Field
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  disabled={isSubmitting}
                ></Field>
              </label>

              <div>
                <ErrorMessage
                  name="name"
                  render={(msg) => <label className="field-error">{msg}</label>}
                />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="edad">
                Edad
                <Field
                  className="input"
                  type="number"
                  name="edad"
                  id="edad"
                  disabled={isSubmitting}
                ></Field>
              </label>

              <div>
                <ErrorMessage
                  name="edad"
                  render={(msg) => <label className="field-error">{msg}</label>}
                />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="email">
                Email
                <Field
                  className="input"
                  type="text"
                  name="email"
                  id="email"
                  disabled={isSubmitting}
                ></Field>
              </label>

              <div>
                <ErrorMessage
                  name="email"
                  render={(msg) => <label className="field-error">{msg}</label>}
                />
              </div>
            </div>

            <div>
              <label className="label" value="Genero" htmlFor="gender">
                Genero
                <Field
                  as="select"
                  className="input"
                  id="gender"
                  name="gender"
                  disabled={isSubmitting}
                >
                  <option value=""> Seleccione</option>
                  <option value="female"> Mujer</option>
                  <option value="male"> Hombre</option>
                </Field>
              </label>
            </div>
            <div>
              <ErrorMessage
                name="gender"
                render={(msg) => <label className="field-error">{msg}</label>}
              />
            </div>

            <div>
              <label className="label" htmlFor="status">
                Estado
                <div>
                  <label className="radio" htmlFor="status">
                    Activo
                    <Field
                      name="status"
                      value="active"
                      type="radio"
                      checked={values.status === "active"}
                      disabled={isSubmitting}
                    ></Field>
                  </label>
                  <label className="radio" htmlFor="status">
                    Inactivo
                    <Field
                      name="status"
                      value="inactive"
                      type="radio"
                      checked={values.status === "inactive"}
                      disabled={isSubmitting}
                    ></Field>
                  </label>
                </div>
              </label>
            </div>
            <div>
              <ErrorMessage
                name="status"
                render={(msg) => <label className="field-error">{msg}</label>}
              />
            </div>

            <button
              className="button button-green"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formik2FormComponent;
