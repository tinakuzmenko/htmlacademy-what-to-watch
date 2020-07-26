import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieCardHero from './movie-card-hero';
import {movie} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

describe(`MovieCardHero`, () => {
  const mockStore = configureStore([]);

  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.APP_STATE]: {
        currentMovie: movie,
        currentPage: `movie`,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieCardHero
              currentMovie={movie}
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
