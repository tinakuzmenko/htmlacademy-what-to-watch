import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app.jsx';
import {movie, movies, reviews} from '../../helpers/test-data.js';

const mockStore = configureStore([]);

const movieCard = movie;

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const store = mockStore({
      movieCard,
      movies,
      moviesReviews: reviews,
      activeGenre: `Drama`,
      moviesByGenre: movies,
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
