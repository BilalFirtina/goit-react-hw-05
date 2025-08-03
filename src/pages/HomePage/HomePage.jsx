import { fetchTrendingMovies } from "../../movie-api";
import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";

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
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
