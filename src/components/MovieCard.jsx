// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link } from "react-router-dom";

const MovieCard = ({ movieProp }) => {
  const { id, title, director, genre, abstract, image } = movieProp;
  return (
    <div className="card mb-4">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        <address>
          <i> By {director} </i>
        </address>
        <p className="card-text"> {abstract} </p>
        <p className="card-text"> {genre} </p>

        {/* BOTTONE PER MOSTRARE PIU' DETTAGLI PER FILM */}
        <Link to={`movies/${id}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
