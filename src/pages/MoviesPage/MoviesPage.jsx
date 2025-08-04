import style from "./MoviesPage.module.css";
import { fetchSearchedMovie } from "../../movie-api";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { NavLink, useSearchParams } from "react-router-dom";
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchSearchedMovie(query);
    setSearchParams({ query });
    setQueryMovies(response);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={style.movieDiv}>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className={style.movieInput}
            type="text"
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {queryMovies.length > 0 && <MovieList movies={queryMovies} />}
    </>
  );
};

export default MoviesPage;
