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
  isMainPage: true,
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
  GO_TO_MOVIE_PAGE: `GO_TO_MOVIE_PAGE`,
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

  goToMoviePage: (chosenMovie) => {
    return {
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: chosenMovie
    };
  }
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

    case ActionType.GO_TO_MOVIE_PAGE:
      return extend(state, {
        currentMovie: action.payload,
        activeGenre: action.payload.genre,
        currentPage: Pages.MOVIE,
        isMainPage: false,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
