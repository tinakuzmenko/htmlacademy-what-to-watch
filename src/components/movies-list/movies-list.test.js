import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {movies} from '../../helpers/test-data';
import MoviesList from './movies-list';

const mockStore = configureStore([]);

describe(`MoviesList`, () => {
  it(`Should render correctly movie card`, () => {
    const store = mockStore({
      movies,
      activeGenre: `All genres`,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviesList
              movies={movies}
              moviesByGenre={movies}
              onSmallMovieCardClick={() => {}}
              onSmallMovieCardMouseEnter={() => {}}
              onSmallMovieCardMouseOut={() => {}}
              render={() => {}}
              isPlaying={true}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
