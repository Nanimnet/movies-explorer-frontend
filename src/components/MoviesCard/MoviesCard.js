import React from 'react';
import './MoviesCard.css';
import film from '../../images/pic__COLOR_pic.jpg';

function MoviesCard() {
    return (
            <div className="movies__card">
                <div className="movies-card__info">
                    <div className="movies-card__description">
                        <p className="movies-card__title">33 слова о дизайне</p>
                        <p className="movies-card__duration">1 час 40 мин</p>
                    </div>
                    <button className="movies-card__save style_hover" type="button"></button>
                </div>
                <img className="movies-card__pik" src={film} alt="обложка фильма"/>
            </div>
    )
}

export default MoviesCard;