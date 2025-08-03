const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return <li key={movie.id}>{movie.name}</li>;
      })}
    </ul>
  );
};

export default MovieList;
