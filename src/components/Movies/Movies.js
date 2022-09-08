import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

function Movies(props) {
    return (
        <main className="movies-page">
            <SearchForm onFindMovies={props.onFindMovies} isLoading={props.isLoading}/>
            {props.isLoading ? <Preloader/> : (
                <MoviesCardList
                    movies={props.movies}
                    onSaveMovie={props.onSaveMovie}
                    onDeleteMovie={props.onDeleteMovie}
                    savedMovies={props.savedMovies}
                    isError={props.isError}
                    isNothingFound={props.isNothingFound}
                />
            )}
        </main>
    )
}

export default Movies;