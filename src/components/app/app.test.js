import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app';
import {movie, movies, reviews, genres} from '../../helpers/test-data';

const mockStore = configureStore([]);
const movieCard = movie;

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const store = mockStore({
      movieCard,
      movies,
      moviesReviews: reviews,
      activeGenre: `All genres`,
      moviesByGenre: movies,
      allMoviesGenres: genres,
      currentPage: `Main`,
      currentMovie: movie,
      isMainPage: true,
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
          onSmallMovieCardClick={() => {}}
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
