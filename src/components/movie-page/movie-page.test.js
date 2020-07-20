import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviePage from './movie-page';
import {movie, movies} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      currentMovie: movie,
      movies,
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
