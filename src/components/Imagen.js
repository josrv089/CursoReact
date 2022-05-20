import React from 'react'

export default function Imagen({imagen}){

    return(
        <img 
                className="imagen"
                alt="Imagen de perfil"
                width="50"
                src={`data:image/jpeg;base64,${imagen}`}
            />

    );
    
}