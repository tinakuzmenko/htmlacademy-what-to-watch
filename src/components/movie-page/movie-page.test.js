import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviePage from './movie-page';
import {movie, movies, reviews} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      moviesByGenre: movies,
      activeGenre: `All genres`,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviePage
              movies={movies}
              isMainPage={false}
              movieCard={movie}
              movieReviews={reviews}
              onSmallMovieCardClick={() => {}} />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
