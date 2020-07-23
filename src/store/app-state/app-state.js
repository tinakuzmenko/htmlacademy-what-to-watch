import {extend} from '../../helpers/utils';
import {Pages, ALL_GENRES} from '../../helpers/constants';

const initialState = {
  activeGenre: ALL_GENRES,
  currentPage: Pages.MAIN,
  isMoviePlayerActive: false,
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  GO_TO_MOVIE_PAGE: `GO_TO_MOVIE_PAGE`,
  WATCH_MOVIE: `WATCH_MOVIE`,
  STOP_WATCHING_MOVIE: `STOP_WATCHING_MOVIE`,
};

const ActionCreator = {
  setActiveGenre: (activeGenre) => {
    return {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: activeGenre,
    };
  },

  goToMoviePage: (currentMovie) => {
    return {
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: {
        currentMovie,
        currentPage: Pages.MOVIE,
      }
    };
  },

  watchMovie: () => {
    return {
      type: ActionType.WATCH_MOVIE,
      payload: true,
    };
  },

  stopWatchingMovie: () => {
    return {
      type: ActionType.STOP_WATCHING_MOVIE,
      payload: false,
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
        currentMovie: action.payload.currentMovie,
        currentPage: action.payload.currentPage,
      });
    case ActionType.WATCH_MOVIE:
      return extend(state, {
        isMoviePlayerActive: action.payload,
      });
    case ActionType.STOP_WATCHING_MOVIE:
      return extend(state, {
        isMoviePlayerActive: action.payload,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
