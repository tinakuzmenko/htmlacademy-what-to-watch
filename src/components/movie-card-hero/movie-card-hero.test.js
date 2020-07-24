import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MovieCardHero} from './movie-card-hero';
import {movie} from '../../helpers/test-data';

describe(`MovieCardHero`, () => {
  const mockStore = configureStore([]);

  it(`Should render correctly`, () => {
    const store = mockStore({
      currentMovie: movie,
      currentPage: `movie`,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieCardHero
              currentMovie={movie}
              onPlayButtonClick={() => {}}
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
