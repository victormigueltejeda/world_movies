import React, { useState } from "react";
import style from "./MoviesDatail.module.css";
import { get } from "../util/getData";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Spinner } from "../components/Spiner";

function MoviesDetail() {
  const { movieId } = useParams();
  const [Loding, setLoding] = useState(true);
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setLoding(false);
      setMovie(data);
    });
  }, [movieId]);

  if (Loding) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className={style.datailContainer}>
      <img
        className={`${style.movieImage} ${style.col}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${style.col} ${style.movieDatail}`}>
        <p className={style.firtItem}>
          <strong>Title:</strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}

export { MoviesDetail };
