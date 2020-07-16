import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MovieCard} from './movie-card';
import {movie} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`MovieCard`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      movieCard: movie,
      currentPage: `main`,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieCard movieCard={movie} />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
