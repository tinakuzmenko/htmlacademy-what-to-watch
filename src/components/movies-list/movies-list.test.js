import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviesList from './movies-list';
import {movies} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`MoviesList`, () => {
  it(`Should render correctly movie card`, () => {
    const store = mockStore({
      moviesByGenre: movies,
      activeGenre: `All genres`,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviesList
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
