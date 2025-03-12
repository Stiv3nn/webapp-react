// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
      <h2>Page Not Found</h2>
      <p className="text-muted my-3">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
