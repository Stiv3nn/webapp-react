// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link } from "react-router-dom";

// IMPPORT DEL COMPONENTE LISTATO
import ReviewCard from "./../components/ReviewCard";

const MoviePage = () => {
  return (
    <>
      <header id="movie" className="border-bottom border-1 mb-3">
        <div className="d-flex mb-3">
          <img
            className="movie-img"
            src="htpp://localhost:3000/img\movies\interstellar.jpg"
            alt="descrizone img"
          />
          <div>
            <h1>Titolo movie</h1>
            <h3 className="text-muted">
              <i>Nome autore</i>
            </h3>
            <p>lorem ipsum</p>
          </div>
        </div>
      </header>

      {/* SEZIONE DOVE CI SARANNO LE REVIEWS DEI FILM */}
      <section id="reviews">
        <header className="d-flex justify-content-between align-item-center mb-4">
          <h4>Our community reviews</h4>
        </header>

        {/* LE REVIEWS SARANNO QUI */}
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
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
