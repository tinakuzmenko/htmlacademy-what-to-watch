import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieCardInfo from './movie-card-info';
import {movie, reviews} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

describe(`MovieCardInfo`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        moviesReviews: reviews,
      },
      [NameSpace.APP_STATE]: {
        currentMovie: movie,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieCardInfo
              currentMovie={movie}
              currentActiveItem={`Overview`}
              defaultActiveItem={`Reviews`}
              onItemClick={() => {}}
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
