import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app';
import {movie, movies} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);
const movieCard = movie;

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard,
        movies,
        isLoading: false,
        isLoadError: false,
      },
      [NameSpace.APP_STATE]: {
        activeGenre: `All genres`,
        currentPage: `main`,
        currentMovie: movie,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        isAuthorizationError: false,
        isAuthorizationProgress: true,
        userInfo: {
          id: 1,
          email: `sadas@gmail.com`,
          name: `asdasd`,
          avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
        }
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              setActiveGenre={() => {}}
              loadMovies={() => {}}
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
