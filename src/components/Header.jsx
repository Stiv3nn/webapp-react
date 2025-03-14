// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary mb-4">
      <div className="contianer-fluid justify-content-start">
        <Link className="navbar-brand" to="/">
          Webapp-React
        </Link>
        <Link className="btn btn-sm btn-secondary" to="/movies/create">
          {" "}
          Add movie
        </Link>
      </div>
    </nav>
  );
};

export default Header;
