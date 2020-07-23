import NameSpace from '../name-space';
import {ALL_GENRES} from '../../helpers/constants';

export const getMoviesGenres = (state) => {
  const movies = state[NameSpace.DATA].movies;
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getCurrentPage = (state) => state[NameSpace.APP_STATE].currentPage;

