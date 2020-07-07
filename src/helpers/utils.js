import {ALL_GENRES} from './constants.js';

export const extend = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const getMoviesReviews = (allReviews, movie) => {
  return allReviews.filter((movieReviews) => movieReviews.movie === movie.title);
};

export const getMoviesGenres = (movies) => {
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES].concat(...genres);
};
