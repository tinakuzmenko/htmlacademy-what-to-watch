import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main.jsx';
import {movie, movies} from '../../helpers/test-data.js';

const movieCard = movie;
const mockStore = configureStore([]);

const store = mockStore({
  movieCard,
  movies,
  activeGenre: `All genres`,
  moviesByGenre: movies,
});

describe(`Main`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Main
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
