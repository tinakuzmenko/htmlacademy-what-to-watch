import {movieCard, movies} from '../mocks/movies.js';
import {allMoviesReviews} from '../mocks/reviews.js';
import {extend} from '../helpers/utils.js';
import {Pages, ALL_GENRES} from '../helpers/constants.js';

const initialState = {
  movieCard,
  movies,
  moviesReviews: allMoviesReviews,
  activeGenre: ALL_GENRES,
  currentPage: Pages.MAIN,
  currentMovie: movieCard,
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  GO_TO_MOVIE_PAGE: `GO_TO_MOVIE_PAGE`,
};

const ActionCreator = {
  setActiveGenre: (activeGenre) => {
    return {
      type: ActionType.SET_ACTIVE_GENRE,
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
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GO_TO_MOVIE_PAGE:
      return extend(state, {
        currentMovie: action.payload,
        currentPage: Pages.MOVIE,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
