import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieCardInfo from './movie-card-info';
import {movie, reviews} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`MovieCardInfo`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      currentMovie: movie,
      moviesReviews: reviews,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieCardInfo
              currentMovie={movie}
              defaultActiveItem={`Overview`}
              onItemClick={() => {}}
              currentActiveItem={`Reviews`}
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
