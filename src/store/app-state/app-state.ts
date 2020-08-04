import {extend} from '../../helpers/utils';
import {ALL_GENRES} from '../../helpers/constants';
import {MovieInterface} from '../../types';

interface AppStateActionInterface {
  type?: string;
  payload?: string | MovieInterface;
}

interface InitialStateInterface {
  activeGenre?: string;
  currentMovie?: MovieInterface | {};
}

const initialState: InitialStateInterface = {
  activeGenre: ALL_GENRES,
  currentMovie: {},
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
};

const ActionCreator = {
  setActiveGenre: (activeGenre: string) => {
    return {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: activeGenre,
    };
  },

  setCurrentMovie: (movie: MovieInterface) => {
    return {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: movie,
    };
  },
};

const reducer = (state = initialState, action: AppStateActionInterface) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload as string,
      });
    case ActionType.SET_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: action.payload as MovieInterface,
      });
    default:
      return state;
  }
};

export {initialState, reducer, ActionType, ActionCreator};
