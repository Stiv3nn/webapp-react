// IMPORTO AXIOS
import axios from "axios";

// USO DI STATE E EFFECT
import { useState, useEffect } from "react";

// IMPORTO MOVIECARD NELLA CARTELLA COMPONENTS CHE SI TROVA NELLA CARTELLA PAGES CON ./../components/MovieCard
import MovieCard from "./../components/MovieCard";

const HomePage = () => {
  // SETTIAMO LO STATO DEL COMPONENTE
  const [movies, setMovies] = useState([]);

  // FUNZIONE DI FETCHING DEI DATI LISTA FILM INDEX
  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => {
        // console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  };

  // fetchMovies();
  useEffect(fetchMovies, []);

  // FUNZIONE DI RENDERING DELLE CARD DEI FILM
  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movieProp={movie} />
        </div>
      );
    });
  };

  return (
    <>
      <h1 className="text-primary">Webapp-React</h1>
      <h2>
        <i>The movies community</i>
      </h2>

      <div className="row row-cols-3 mt-4">
        {/* MOVIES */}
        {renderMovies()}
      </div>
    </>
  );
};

export default HomePage;
