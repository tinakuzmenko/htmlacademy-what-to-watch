import {extend} from '../../helpers/utils';
import {AuthorizationStatus} from '../../helpers/constants';
import {ActionCreator as AppStateActionCreator} from '../app-state/app-state';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  CLEAR_AUTHORIZATION_ERROR: `CLEAR_AUTHORIZATION_ERROR`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
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
  }
};

const Operations = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(AppStateActionCreator.goToMainPage());
      })
      .catch(() => {
        dispatch(ActionCreator.showAuthorizationError());
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SHOW_AUTHORIZATION_ERROR:
      return extend(state, {
        authorizationError: action.payload,
      });
    case ActionType.CLEAR_AUTHORIZATION_ERROR:
      return extend(state, {
        authorizationError: action.payload,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator, Operations};
