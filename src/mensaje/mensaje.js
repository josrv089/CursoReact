export const agregarMensaje = (setMensaje, mensaje, setError, error) => {
    setMensaje(mensaje);
    setError(error);
    setTimeout(function () {
      setMensaje("");
      setError(false);
    }, 5000);
  };