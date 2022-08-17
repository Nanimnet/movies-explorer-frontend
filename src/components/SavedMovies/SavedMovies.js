import "./SavedMovies.css";
import "../Movies/Movies.css";
import "../MoviesCard/MoviesCard.css";
import "../MoviesCardList/MoviesCardList.css";
import SearchForm from "../SearchForm/SearchForm";
import film from "../../images/pic__COLOR_pic.jpg";

function SavedMovies(props) {
  return (
    <main>
      <SearchForm />
      <section className="movies">
        <div className="movies__container">
          <div className="movies__cards">
            <div className="template-element">
              <div className="movies__card">
                <div className="movies-card__info">
                  <div className="movies-card__description">
                    <p className="movies-card__title">33 слова о дизайне</p>
                    <p className="movies-card__duration">
                      1 час 40 минут
                    </p>
                  </div>
                  <button className="movies-card__save style_hover"></button>
                </div>
                <img
                  className="movies-card__pik"
                  src={film}
                  alt="обложка фильма"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SavedMovies;
