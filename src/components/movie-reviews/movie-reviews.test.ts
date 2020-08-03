import * as React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';
import {reviews} from '../../helpers/test-data';
import MovieReviews from './movie-reviews';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

describe(`MovieReviews`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      movieReviews: reviews,
    },
  });

  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieReviews />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
