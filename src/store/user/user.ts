import {extend} from '../../helpers/utils';
import {createUser} from '../../adapters/adapters';
import {AuthorizationStatus} from '../../helpers/constants';
import {UserInfoInterface} from '../../types';

interface UserActionInterface {
  type?: string;
  payload?: string | boolean | UserInfoInterface;
}

interface InitialStateInterface {
  userInfo?: UserInfoInterface;
  isAuthorizationError?: boolean;
  isAuthorizationProgress?: boolean;
  authorizationStatus?: string;
}

const initialState: InitialStateInterface = {
  userInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatarUrl: ``,
  },
  isAuthorizationError: false,
  isAuthorizationProgress: true,
  authorizationStatus: ``,
};

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  FINISH_AUTHORIZATION_PROGRESS: `FINISH_AUTHORIZATION_PROGRESS`,
  GET_USER_DATA: `GET_USER_DATA`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  CLEAR_AUTHORIZATION_ERROR: `CLEAR_AUTHORIZATION_ERROR`,
};

const ActionCreator = {
  setAuthorizationStatus: (status: string) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    };
  },

  finishAuthorizationProgress: () => {
    return {
      type: ActionType.FINISH_AUTHORIZATION_PROGRESS,
      payload: false,
    };
  },

  getUserData: (userData: UserInfoInterface) => {
    return {
      type: ActionType.GET_USER_DATA,
      payload: userData,
    };
  },

  showAuthorizationError: () => {
    return {
      type: ActionType.SHOW_AUTHORIZATION_ERROR,
      payload: true
    };
  },

  clearAuthorizationError: () => {
    return {
      type: ActionType.CLEAR_AUTHORIZATION_ERROR,
      payload: false
    };
  },
};

const Operations = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getUserData(createUser(response.data)));
        dispatch(ActionCreator.finishAuthorizationProgress());
      })
      .catch(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.finishAuthorizationProgress());
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.showAuthorizationError());
      });
  },
};

const reducer = (state = initialState, action: UserActionInterface) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload as string,
      });
    case ActionType.FINISH_AUTHORIZATION_PROGRESS:
      return extend(state, {
        isAuthorizationProgress: action.payload as boolean,
      });
    case ActionType.GET_USER_DATA:
      return extend(state, {
        userInfo: action.payload as UserInfoInterface,
      });
    case ActionType.SHOW_AUTHORIZATION_ERROR:
      return extend(state, {
        isAuthorizationError: action.payload as boolean,
      });
    case ActionType.CLEAR_AUTHORIZATION_ERROR:
      return extend(state, {
        isAuthorizationError: action.payload as boolean,
      });
    default:
      return state;
  }
};

export {initialState, reducer, ActionType, ActionCreator, Operations};
