import style from "./MoviesPage.module.css";
const MoviesPage = () => {
  return (
    <div className={style.movieDiv}>
      <input className={style.movieInput} type="text" />
      <button>Search</button>
    </div>
  );
};

export default MoviesPage;
