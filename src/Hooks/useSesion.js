import { useState } from 'react';

export const useSesion = () =>{
    const [usuario,setUsuario] = useState(null);

    const iniciarSesion = () =>{
        setUsuario({
            nombre:"Josue",
            apellidos:"Rivas",
            rol:"Admin",
            telefono:22222222,
        })
    }

    const validarSesion = () =>{
        return usuario !==null;
    }

    const cerrarSesion = () =>{
        setUsuario(null);
    }

    return [usuario,iniciarSesion,validarSesion,cerrarSesion];

};

