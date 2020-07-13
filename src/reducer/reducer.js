import {movieCard, movies} from '../mocks/movies.js';
import {allMoviesReviews} from '../mocks/reviews.js';
import {extend, filterMoviesByGenre, getMoviesGenres} from '../helpers/utils.js';
import {Pages, ALL_GENRES} from '../helpers/constants.js';

const initialState = {
  movieCard,
  movies,
  moviesReviews: allMoviesReviews,
  activeGenre: ALL_GENRES,
  moviesByGenre: movies,
  allMoviesGenres: getMoviesGenres(movies),
  currentPage: Pages.MAIN,
  currentMovie: movieCard,
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
};

const ActionCreator = {
  getMoviesByGenre: (activeGenre) => {
    const moviesByGenre = filterMoviesByGenre(movies, activeGenre);

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
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        moviesByGenre: action.payload,
      });
    case ActionType.GET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
