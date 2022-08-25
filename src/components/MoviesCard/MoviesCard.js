import React from 'react';
import './MoviesCard.css';
import '../SavedMovies/SavedMovies.css';
import { handleDuration } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const location=useLocation();
    const locationMovies = location.pathname === '/movies';

    function handleSaveMovie() {
        console.log(props.movie);

        const newMovie = {
            country: props.movie.country || 'Нет данных',
            director: props.movie.director,
            duration: props.movie.duration,
            year: props.movie.year,
            description: props.movie.description,
            image: `https://api.nomoreparties.co/${props.movie.image.url}`,
            trailerLink: props.movie.trailerLink,
            nameRU: props.movie.nameRU || 'Нет данных',
            nameEN: props.movie.nameEN || 'Нет данных',
            thumbnail: `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
            movieId: props.movie.id
        }
        props.onSaveMovie(newMovie)
    }

    function handleDeleteMovie(e) {
        e.preventDefault();

        if (location.pathname !== '/movies') {
            props.onDeleteMovie(props.movie);
        } else {
            const nameRu = String(props.movie.nameRu)
            const movieToDeleteArray = props.savedMovies.filter(data => {
                const movieName = String(data.nameRU);
                const movieToDeleteName = movieName.includes(nameRu);
                return movieToDeleteName;
            })
            const movieToDelete = movieToDeleteArray[0];
            props.onDeleteMovie(movieToDelete);
        }
    }
    return (
            <div className="movies__card" key={props.movie._id}>
                <div className="movies-card__info">
                    <div className="movies-card__description">
                        <p className="movies-card__title">{props.movie.nameRU}</p>
                        <p className="movies-card__duration">{handleDuration(props.movie.duration)}</p>
                    </div>

                    {locationMovies ? (
                    <button
                        className={`movies-card__save style_hover ${props.isLikeMovies ? 'movies-card__chekced' : ''}`}
                        onClick={props.isLikeMovies ? handleDeleteMovie : handleSaveMovie}>
                    </button>
                ) : (
                    <button
                        className="movies-card__delete style_hover"
                        onClick={handleDeleteMovie}>
                    </button>
                )}
                </div>
                <a href={props.movie.trailerLink} target="blank">
                    <img 
                        className="movies-card__pik" 
                        src={(location.pathname === '/movies') ? `https://api.nomoreparties.co/${props.movie.image.url}` : props.movie.image} 
                        alt="обложка фильма"/>
                </a>
            </div>
    )
}

export default MoviesCard;