import React, { useState, useEffect } from "react";

export default function Reloj() {
  const [hora, setHora] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("Use Efect se ejecutó")
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    }
  },[visible]);

  
  return (
    <>
      <h3>Reloj </h3>
      {visible ? (
        <>
          <label>Hora: {hora}</label>
        </>
      ) : (
        <></>
      )}

      <button onClick={() => {setVisible(true);}}>Iniciar</button>

      <button onClick={() => {setVisible(false);}}>Detener</button>

    </>
  );
}
