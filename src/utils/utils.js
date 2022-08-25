export function handleFoundMovies(query, movies) {
  const keyword = query.toLowerCase();
  const moviesFilter = movies.filter((item) => {
    const stringRU = String(item.nameRU.toLowerCase());
    const search = stringRU.includes(keyword);
    return search;
  });
  return moviesFilter;
}

export function filterShortFilm(movies) {
  return movies.filter((film) => film.duration < 40);
}

export function handleDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - 60 * hours;
  return `${hours}ч ${minutes}м`;
}
