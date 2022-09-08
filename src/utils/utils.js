import { SHORTMOVIES_DURATION } from './constants.js';

export function handleFoundMovies(query, movies) {
  
  const keyword = query?.toLowerCase();

  //в случае пустой строки запроса, отображаем пустой массив
  if (keyword === '' || keyword === 'undefined') {
    return [];
  }

  const moviesFilter = movies.filter((item) => {
    const stringRU = String(item.nameRU.toLowerCase());
    const search = stringRU.includes(keyword);
    return search;
  });

  return moviesFilter;
}

export function filterShortFilm(movies) {
  return movies.filter((film) => film.duration < SHORTMOVIES_DURATION);
}

export function handleDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - 60 * hours;
  return `${hours}ч ${minutes}м`;
}
