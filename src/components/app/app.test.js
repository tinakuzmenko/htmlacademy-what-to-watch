import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app';
import {movie, movies, reviews} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);
const movieCard = movie;

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard,
        movies,
        moviesReviews: reviews,
        isError: false,
      },
      [NameSpace.APP_STATE]: {
        activeGenre: `All genres`,
        currentPage: `main`,
        currentMovie: movie,
        isMainPage: true,
        isMoviePlayerActive: false,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
      },
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
