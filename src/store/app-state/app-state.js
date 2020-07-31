import {extend} from '../../helpers/utils';
import {ALL_GENRES} from '../../helpers/constants';

const initialState = {
  activeGenre: ALL_GENRES,
  currentMovie: {},
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
};

const ActionCreator = {
  setActiveGenre: (activeGenre) => {
    return {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: activeGenre,
    };
  },

  setCurrentMovie: (movie) => {
    return {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: movie,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.SET_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: action.payload,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
