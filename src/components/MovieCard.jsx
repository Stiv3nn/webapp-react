// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="card mb-4">
      <img
        className="card-img-top"
        src="htpp://localhost:3000/img\movies\interstellar.jpg"
        alt="descrizone img"
      />
      <div className="card-body">
        <h5 className="card-title"> Titolo del film </h5>
        <address>
          <i> By nome autore </i>
        </address>
        <p className="card-text"> Lorem ipsum lorem ipsum</p>

        {/* BOTTONE PER MOSTRARE PIU' DETTAGLI PER FILM */}
        <Link to="movies/2" className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
