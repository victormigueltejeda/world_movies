import React from "react";
import { MoviCard } from "../components/MoviesCard";
import styles from "./movieGrid.module.css";
import { get } from "../util/getData";
import { Spinner } from "./Spiner";

function MoviesGrid() {
  const [Loding, setLoding] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    setLoding(true);
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setLoding(false);
    });
  }, []);

  if (Loding) {
    return <Spinner />;
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => {
        return <MoviCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

export { MoviesGrid };
