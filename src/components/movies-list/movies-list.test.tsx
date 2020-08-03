import * as React from 'react';
import {Provider} from 'react-redux';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {movies, noop} from '../../helpers/test-data';
import MoviesList from './movies-list';
import {Router} from 'react-router-dom';
import history from '../../history';

const mockStore = configureStore([]);

describe(`MoviesList`, () => {
  it(`Should render correctly movie card`, () => {
    const store = mockStore({
      movies,
      activeGenre: `All genres`,
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MoviesList
                movies={movies}
                moviesByGenre={movies}
                onSmallMovieCardClick={noop}
                onSmallMovieCardMouseEnter={noop}
                onSmallMovieCardMouseOut={noop}
                render={noop}
                isPlaying={true}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
