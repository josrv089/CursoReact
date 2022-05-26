import {useSesion} from '../Hooks/useSesion';

const Login = () =>{
    const [usuario, iniciarSesion,validarSesion,cerrarSesion] = useSesion();

    return(
        <>
            <label>Bienvenido al sistema.</label>
            {validarSesion()?(
                <>
                    <label>Hola {usuario.nombre}</label>
                    <button onClick={cerrarSesion}>Cerrar sesion</button>
                </>
            ):
            (
                <>
                    <button onClick={iniciarSesion}>Iniciar Sesion</button>
                </>
            )

            }

        </>
    )
}

export default Login;