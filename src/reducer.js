import {movieCard, movies} from './mocks/movies.js';
import {allMoviesReviews} from './mocks/reviews.js';
import {extend} from './helpers/utils.js';
import {ALL_GENRES} from './helpers/constants.js';

const initialState = {
  movieCard,
  movies,
  moviesReviews: allMoviesReviews,
  activeGenre: ALL_GENRES,
  moviesByGenre: movies,
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
};

const filterMoviesByGenre = (allMovies, activeGenre) => {
  if (activeGenre === ALL_GENRES) {
    return allMovies;
  }

  return allMovies.filter((movie) => movie.genre === activeGenre);
};

const ActionCreator = {
  getMoviesByGenre: (allMovies, activeGenre) => {
    const moviesByGenre = filterMoviesByGenre(allMovies, activeGenre);

    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: moviesByGenre,
    };
  },

  getActiveGenre: (activeGenre) => {
    return {
      type: ActionType.GET_ACTIVE_GENRE,
      payload: activeGenre,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        movies: action.payload,
      });

  }

  return state;
};

export {reducer, ActionType, ActionCreator};
