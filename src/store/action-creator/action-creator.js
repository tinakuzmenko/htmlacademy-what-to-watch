import {Pages} from '../../helpers/constants';

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

  goToMoviePage: (chosenMovie) => {
    return {
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: {
        movie: chosenMovie,
        page: Pages.MOVIE,
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

export {ActionType, ActionCreator};
