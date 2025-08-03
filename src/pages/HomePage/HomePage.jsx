import { fetchTrendingMovies } from "../../movie-api";
import { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import { NavLink } from "react-router";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending Today</h2>
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

export default HomePage;
