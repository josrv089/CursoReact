import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormularioUsuarioFormikComponent = ({
  regresar,
  agregarUsario,
  modificarUsario,
  eliminarUsario,
  usuario = {},
}) => {
  const validaciones = Yup.object({
    name: Yup.string()
      .required("El mombre es requerido")
      .max(30, "Lo langitud maxima es de 30.")
      .min(5, "Lo langitud mínima es de 5."),
    email: Yup.string()
      .required("El email es requerido")
      .email("El formato del email es incorrecto.")
      .max(100, "Longitud incorrecta."),
    gender: Yup.string().required("El genero es requerido"),
    status: Yup.string().required("El status es requerido"),
  });

  return (
    <>
      <Formik
        initialValues={usuario}
        onSubmit={async (values, { setSubmitting }) => {
          values.id
            ? await modificarUsario(values.id, values)
            : await agregarUsario(values);
          setSubmitting(false);
        }}
        validationSchema={validaciones}
      >
        {({ values, isSubmitting, setSubmitting }) => (
          <Form>
            <h3>
              {values.id
                ? "Modificar usuario formik"
                : "Agregar usuario formik"}
            </h3>
            {values.id ? (
              <div>
                <label className="label" value="id" htmlFor="name">
                  Identificador
                  <Field
                    className="input"
                    id="id"
                    name="id"
                    type="text"
                    disabled={true}
                  ></Field>
                </label>
              </div>
            ) : null}

            <div>
              <label className="label" value="Nombre" htmlFor="name">
                Nombre
                <Field
                  className="input"
                  id="name"
                  name="name"
                  type="text"
                  disabled={isSubmitting}
                ></Field>
              </label>
            </div>
            <div>
              <ErrorMessage
                name="name"
                render={(msg) => <label className="field-error">{msg}</label>}
              />
            </div>
            <div>
              <label className="label" value="Email" htmlFor="email">
                Email
                <Field
                  className="input"
                  id="email"
                  name="email"
                  type="text"
                  disabled={isSubmitting}
                ></Field>
              </label>
            </div>
            <div>
              <ErrorMessage
                name="email"
                render={(msg) => <label className="field-error">{msg}</label>}
              />
            </div>
            <div>
              <label className="label" value="Genero" htmlFor="gender">
                Genero
                <Field
                  className="input"
                  id="gender"
                  name="gender"
                  as="select"
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

            <div>
              <button
                className="button button-green"
                type="submit"
                disabled={isSubmitting}
              >
                {values.id ? "Modificar" : "Agregar"}
              </button>
              {values.id ? (
                <button
                  className="button button-red"
                  type="button"
                  onClick={async () => {
                    setSubmitting(true);
                    await eliminarUsario(values.id);
                    setSubmitting(false);
                  }}
                  disabled={isSubmitting}
                >
                  Eliminar
                </button>
              ) : null}

              <button
                className="button button-blue"
                type="button"
                onClick={() => regresar()}
                disabled={isSubmitting}
              >
                Regresar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormularioUsuarioFormikComponent;
