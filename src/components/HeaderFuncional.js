import React, { useState } from "react";
import PropTypes from "prop-types";
import Picture from "./Picture";

//export default function HeaderFuncional({titulo1,titulo2,contador,handlerContador}){
export default function HeaderFuncional(props) {
  const [imagen, setImagen] = useState("");

  const handleClick = (event) => {
    let fileUpdate = event.target.files[0];
    if (fileUpdate != null) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      }).then((data) => {
        let base64result = data.substr(data.indexOf(",") + 1);
        setImagen(base64result);
      });
    }
  };
  
  return (
    <>
      <h2>{props.titulo1}</h2>
      <h3>{props.titulo2}</h3>
      <label>{props.contador}</label>
      <button onClick={props.handlerContador}>Aumentar</button>
      <div>
          
        <Picture imagen={imagen} handleClick={handleClick}></Picture>
      </div>
    </>
  );
}

HeaderFuncional.defaultProps = {
  contador: 30,
};
HeaderFuncional.propTypes = {
  contador: PropTypes.number,
};
