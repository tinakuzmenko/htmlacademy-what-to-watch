import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import GenresList from './genres-list';
import {genres} from '../../helpers/test-data';

const mockStore = configureStore([]);

describe(`GenresList`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      allMoviesGenres: genres,
      activeGenre: `All genres`,
    });

    store.dispatch = jest.fn();

    const tree = renderer
      .create(
          <Provider store={store}>
            <GenresList />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
