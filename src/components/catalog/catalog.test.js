import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Catalog from './catalog.jsx';
import {movie, movies, genres} from '../../helpers/test-data.js';

const mockStore = configureStore([]);

describe(`Catalog`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      movieCard: movie,
      movies,
      moviesByGenre: movies,
      activeGenre: `All genres`,
      allMoviesGenres: genres,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Catalog
              onSmallMovieCardClick={() => {}}
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
