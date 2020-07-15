import {ALL_GENRES} from './constants';

export const extend = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const getMoviesReviews = (allReviews, movie) => {
  return allReviews.filter((movieReviews) => movieReviews.movie === movie.title);
};

export const getMoviesGenres = (movies) => {
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};

export const filterMoviesByGenre = (allMovies, activeGenre) => {
  if (activeGenre === ALL_GENRES) {
    return allMovies;
  }

  return allMovies.filter((movie) => movie.genre === activeGenre);
};
