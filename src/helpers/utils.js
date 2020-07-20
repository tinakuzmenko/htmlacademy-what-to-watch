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

export const sliceReviews = (reviews) => {
  const sliceIndex = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, sliceIndex);
  const secondColReviews = reviews.slice(sliceIndex, reviews.length);

  return [firstColReviews, secondColReviews];
};

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Very good`;
  } else if (rating === 10) {
    return `Awesome`;
  }

  return null;
};

export const getRunTimeFormat = (runTime) => {
  const hours = Math.trunc(runTime / 60);
  const minutes = runTime - (hours * 60);

  return `${hours}h ${minutes}m`;
};
