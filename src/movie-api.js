import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const trendingMoviesUrl = `${baseUrl}trending/movie/day`;
const selectedMovieUrl = `${baseUrl}/movie/`;
//const queryMoviesUrl = `${baseUrl}search/movie?query=${searchQuery}`;

const fetchMovies = async (url, id = "") => {
  const options = {
    params: {},
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzU2NTJkZDFlZmZjNzhjYmRiN2IyNWE3ZmY1YTczNiIsIm5iZiI6MTc0OTAxMzcxNy4wMjksInN1YiI6IjY4M2ZkNGQ1Nzc2YjViZjVlMDdiYjVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VTKgl7SLVx2XdvAHKy2AW5xLIK2h9ts-MuBS8PnEbEc",
    },
  };
  try {
    const lastUrl = url + id;
    const fetchedMovies = await axios.get(lastUrl, options);
    return fetchedMovies.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTrendingMovies = () => fetchMovies(trendingMoviesUrl);
export const fetchSelectedMovie = (id) => fetchMovies(selectedMovieUrl, id);
