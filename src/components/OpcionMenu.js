import { Link } from "react-router-dom";

function OpcionMenu({ descripcion, to }) {
  return (
      <li className="nav-item">
        <Link className="nav-link" to={to}>
          {descripcion}
        </Link>
      </li>
  );
}

export default OpcionMenu;
