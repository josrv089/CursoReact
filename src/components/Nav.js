import { Routes, Route } from "react-router-dom";
import AcercaDe from "./AcercaDe";
import Body from "./Body";
import Contactenos from "./Contactenos";
import Menu from "./Menu";
import Principal from "./Principal";

function Nav() {

    const Admin = () =><h1>Esta página solo es para administradores</h1>
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Menu></Menu>
      </nav>
      <Routes>
        <Route path="/" element={<Principal />}></Route>

        <Route path="Principal" element={<Body />}></Route>

        <Route path="Contactenos" element={<Contactenos />}>
          
        </Route>
        <Route path="AcercaDe" element={<AcercaDe />}>
          {" "}
        </Route>
        <Route path="Administracion" element={<Admin />}>
          
        </Route>
      </Routes>
    </>
  );
}

export default Nav;
