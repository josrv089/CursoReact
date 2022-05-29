import { useContext } from "react";
import UserContext from "../UserContext";

function UserInfo() {
    const user = useContext(UserContext);

    return ( 
        <>
            <label>Hola {user.nombre} desde componente funcional</label>
        </>
     );
}

export default UserInfo;