import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviePage from './movie-page';
import {movie, movies} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies,
      },
      [NameSpace.APP_STATE]: {
        currentMovie: movie,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        userInfo: {
          id: 1,
          email: `sadas@dsasd.ru`,
          name: `asdasd`,
          avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
        }
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviePage />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
