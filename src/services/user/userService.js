import { axiosService } from "../axios/serviceAxios";

export const listarUsuarios = async () =>{
    let respuesta = {};
    let consulta = await axiosService(`users`,`GET`);
    if(!consulta.error){
        consulta.response.forEach(element => {
            element.status= element.status==="active"?"Activo":"Inactivo";
            element.gender= element.gender==="male"?"Hombre":"Mujer";
            
        });
        respuesta.error=false;
        respuesta.msg="Los usuarios han sido consultados de manera exitosa.";
        respuesta.data=consulta.response;
    }
    else{
            respuesta.error=true;
            respuesta.msg="Los usuarios no podido ser consultados .";
            respuesta.data=null;
    }
    return respuesta;
};

export const consultarUsuario = async (id) =>{
    let respuesta = {};
    let consulta = await axiosService(`users/${id}`,`GET`);
    if(!consulta.error){
        respuesta.error=false;
        respuesta.msg="El usuario ha sido consultado de forma exitosa.";
        respuesta.data=consulta.response;
    }
    else{
            respuesta.error=true;
            respuesta.msg="Se presentó un error al consultar el usuario.";
            respuesta.data=null;
    }
    return respuesta;
};

export const agregarUsuario = async (usuario) =>{
    let respuesta = {};
    let consulta = await axiosService(`users`,`POST`,usuario);
    if(!consulta.error){
        respuesta.error=false;
        respuesta.msg="El usuario ha sido agregado de forma exitosa.";
        respuesta.data=consulta.response;
    }
    else{
            respuesta.error=true;
            respuesta.msg="Se presentó un error al agregar el usuario.";
            respuesta.data=null;
    }
    return respuesta;
};

export const modificarUsuario = async (id, usuario) =>{
    let respuesta = {};
    let consulta = await axiosService(`users/${id}`,`PUT`,usuario);
    if(!consulta.error){
        respuesta.error=false;
        respuesta.msg="El usuario ha sido modificado de forma exitosa.";
        respuesta.data=consulta.response;
    }
    else{
            respuesta.error=true;
            respuesta.msg="Se presentó un error al modificado el usuario.";
            respuesta.data=null;
    }
    return respuesta;
};

export const eliminarUsuario = async (id) =>{
    let respuesta = {};
    let consulta = await axiosService(`users/${id}`,`DELETE`);
    if(!consulta.error){
        respuesta.error=false;
        respuesta.msg="El usuario ha sido eliminado de forma exitosa.";
        respuesta.data=consulta.response;
    }
    else{
            respuesta.error=true;
            respuesta.msg="Se presentó un error al eliminar el usuario.";
            respuesta.data=null;
    }
    return respuesta;
};