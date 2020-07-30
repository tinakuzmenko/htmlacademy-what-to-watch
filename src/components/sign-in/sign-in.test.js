import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import SignIn from './sign-in';
import {movie} from '../../helpers/test-data';

describe(`SignIn`, () => {
  const mockStore = configureStore([]);

  it(`Should render correctly when AuthError`, () => {
    const store = mockStore({
      [NameSpace.APP_STATE]: {
        currentPage: `movie`,
        currentMovie: movie,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        isAuthorizationError: true,
        userInfo: {
          id: 0,
          email: ``,
          name: ``,
          avatarUrl: ``,
        }
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <SignIn
              onFormSubmit={() => {}}
              clearAuthError={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly when no AuthError`, () => {
    const store = mockStore({
      [NameSpace.APP_STATE]: {
        currentPage: `movie`,
        currentMovie: movie,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        isAuthorizationError: false,
        userInfo: {
          id: 1,
          email: `sadas@gmail.com`,
          name: `asdasd`,
          avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
        }
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <SignIn
              onFormSubmit={() => {}}
              clearAuthError={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
