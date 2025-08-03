import { useEffect, useState } from "react";
import { fetchSelectedMovie } from "../../movie-api";
import { NavLink, Outlet, useNavigate, useParams } from "react-router";
import style from "./MovieDetailsPage.module.css";
import { GoArrowLeft } from "react-icons/go";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const SelectedMovie = async () => {
      const selectedMovie = await fetchSelectedMovie(movieId);
      setMovie(selectedMovie);
    };
    SelectedMovie();
  }, [movieId]);
  const genres = movie.genres?.map((genre) => genre.name) ?? [];

  return (
    <>
      <div className={style.container}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <GoArrowLeft className={style.icon} />
          Go Back
        </button>
        <div className={style.info}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.tagline}
            className={style.image}
          />

          <div>
            <h2>{movie.title}</h2>
            <p>{`User Score: %${Math.round(movie.vote_average * 10)}`}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{genres.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className={style.infoBox}>
        <p>Additional Informations</p>
        <ul>
          <li>
            <NavLink className={style.links} to={"cast"}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={style.links} to={"reviews"}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
