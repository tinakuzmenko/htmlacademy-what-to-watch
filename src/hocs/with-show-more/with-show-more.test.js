import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import withShowMore from './with-show-more';
import {movie, movies} from '../../helpers/test-data';

const MockComponent = () => {
  return (
    <div></div>
  );
};

const mockStore = configureStore([]);

it(`withShowMore is rendered correctly`, () => {
  const MockComponentWrapped = withShowMore(MockComponent);

  const store = mockStore({
    movieCard: movie,
    movies,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MockComponentWrapped />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
