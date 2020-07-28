import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main';
import {movie, movies, reviews} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

describe(`Main`, () => {
  it(`Should render correctly`, () => {

    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard: movie,
        movies,
        moviesReviews: reviews,
      },
      [NameSpace.APP_STATE]: {
        activeGenre: `All genres`,
        currentPage: `main`,
        currentMovie: movie,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
