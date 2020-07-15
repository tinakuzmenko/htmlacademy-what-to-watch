import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main';
import {movie, movies, genres} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`Main`, () => {
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
            <Main
              isMainPage={true}
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
