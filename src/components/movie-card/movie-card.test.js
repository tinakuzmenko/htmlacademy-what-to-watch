import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieCard from './movie-card';
import {movie} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

describe(`MovieCard`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard: movie,
      },
      [NameSpace.APP_STATE]: {
        currentPage: `main`,
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
            <MovieCard
              movieCard={movie}
              onPlayButtonClick={() => {}} />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
