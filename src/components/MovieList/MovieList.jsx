import style from "./MovieList.module.css";
import { NavLink } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={style.movieUl}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <NavLink className={style.navLink} to={`movies/${movie.id}`}>
                {movie.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
