// IMPORTO MOVIECARD NELLA CARTELLA COMPONENTS CHE SI TROVA NELLA CARTELLA PAGES CON ./../components/MovieCard
import MovieCard from "./../components/MovieCard";

const HomePage = () => {
  return (
    <>
      <h1 className="text-primary">Webapp-React</h1>
      <h2>
        <i>The movies community</i>
      </h2>

      <div className="row row-cols-3 mt-4">
        {/* MOVIES */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default HomePage;
