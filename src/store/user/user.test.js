import {initialState, ActionType, ActionCreator, reducer} from './user';
import {AuthorizationStatus} from '../../helpers/constants';

describe(`User Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should show Auth Error`, () => {
    expect(reducer({
      authorizationError: false,
    }, {
      type: ActionType.SHOW_AUTHORIZATION_ERROR,
      payload: true,
    })).toEqual({
      authorizationError: true,
    });
  });

  it(`Reducer should get user data`, () => {
    expect(reducer({
      userInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatarUrl: ``,
      },
    }, {
      type: ActionType.GET_USER_DATA,
      payload: {
        id: 1,
        email: `asdasda@sfdsf.ru`,
        name: `asdasda`,
        avatarUrl: `wtw/sfdsf.ru`,
      },
    })).toEqual({
      userInfo: {
        id: 1,
        email: `asdasda@sfdsf.ru`,
        name: `asdasda`,
        avatarUrl: `wtw/sfdsf.ru`,
      },
    });
  });

  it(`Reducer should clear Auth Error`, () => {
    expect(reducer({
      authorizationError: true,
    }, {
      type: ActionType.CLEAR_AUTHORIZATION_ERROR,
      payload: false,
    })).toEqual({
      authorizationError: false,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});
