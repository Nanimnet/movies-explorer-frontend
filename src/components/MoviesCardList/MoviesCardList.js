import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__container block">
        <div className="movies__cards">
          <MoviesCard />
          </div>
          <button className="movies__more style_hover">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
