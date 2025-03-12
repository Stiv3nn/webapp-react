// IMPORTO AXIOS
import axios from "axios";

// USO DI STATE E EFFECT
import { useState, useEffect } from "react";

// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link, useNavigate, useParams } from "react-router-dom";

// IMPPORT DEL COMPONENTE LISTATO
import ReviewCard from "./../components/ReviewCard";

const MoviePage = () => {
  // RECUPERIAMO L'ID DEL FILM RICHIESTO
  const { id } = useParams();

  // UTILIZZO PER IL REDIRECT (useNavigate)
  const redirect = useNavigate();
  // SETTIAMO LO STATO DEL COMPNENTE
  const [movie, setMovie] = useState({});

  // FUNZIONE DI CHIAMATA ALL'API PER IL LIBRO RICHIESTO
  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies/" + id)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 404) redirect("/*");
      });
  };

  // CHIAMATA ALL'API AL MOnTAGGIO DEL COMPONENTE
  useEffect(fetchMovies, []);

  // FUNZIONE DI RENDERING DELLE REVIEWS
  const renderReviews = () => {
    return movie.reviews?.map((review) => (
      <ReviewCard key={review.id} reviewProp={review} />
    ));
  };

  return (
    <>
      <header id="movie" className="border-bottom border-1 mb-3">
        <div className="d-flex mb-3">
          <img className="movie-img" src={movie.image} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h3 className="text-muted">
              <i>{movie.director}</i>
            </h3>
            <p>{movie.abstract}</p>
          </div>
        </div>
      </header>

      {/* SEZIONE DOVE CI SARANNO LE REVIEWS DEI FILM */}
      <section id="reviews">
        <header className="d-flex justify-content-between align-item-center mb-4">
          <h4>Our community reviews</h4>
        </header>

        {/* LE REVIEWS SARANNO QUI */}
        {renderReviews()}
      </section>

      <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
        <Link className="btn btn-secondary" to="/">
          Back to Home
        </Link>
      </footer>
    </>
  );
};

export default MoviePage;
