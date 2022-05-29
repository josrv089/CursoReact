import { useContext } from "react";
import UserContext from "../UserContext";
import OpcionMenu from "./OpcionMenu";



function Menu() {
    const user = useContext(UserContext);
  return (
    <>
      <ul className="navbar-nav mr-auto">
          <OpcionMenu descripcion="Inicio" to="/"></OpcionMenu>
          <OpcionMenu descripcion="Principal" to="/Principal"></OpcionMenu>
          <OpcionMenu descripcion="Contactenos" to="/Contactenos"></OpcionMenu>
          <OpcionMenu descripcion="Acerca De" to="/AcercaDe"></OpcionMenu>
          {user.rol==="Admin" && (
              <OpcionMenu descripcion="Administracion" to="/Administracion"></OpcionMenu>
          )}
      </ul>
    </>
  );
}

export default Menu;
