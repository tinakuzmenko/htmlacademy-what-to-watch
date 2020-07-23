import NameSpace from '../name-space';
import {getActiveGenre} from '../../store/app-state/selectors.js';
import {ALL_GENRES, MAX_SHOWN_MOVIES_LIKE_THIS} from '../../helpers/constants';

export const getMoviesGenres = (state) => {
  const movies = state[NameSpace.DATA].movies;
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getMovieCard = (state) => state[NameSpace.DATA].movieCard;

export const getFilteredMoviesByGenre = (state) => {
  const movies = getMovies(state);
  const activeGenre = getActiveGenre(state);

  if (activeGenre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === activeGenre);
};

export const getFilteredMoviesLikeThis = (state) => {
  const movies = getMovies(state);
  const activeGenre = getActiveGenre(state);

  return getFilteredMoviesByGenre(movies, activeGenre)
    .filter((movie) => movie.title !== state[NameSpace.DATA].currentMovie.title)
    .slice(0, MAX_SHOWN_MOVIES_LIKE_THIS);
};
