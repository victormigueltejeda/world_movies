import React from "react";
import { Link } from "react-router-dom";
import styles from "./movieCard.module.css";

function MoviCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img className={styles.movieImag} src={imageUrl} alt={movie.title} />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}

export { MoviCard };
