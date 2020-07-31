import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviePage from './movie-page';
import {movies} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';
import {Router} from 'react-router-dom';
import history from '../../history';

const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies,
      },
      [NameSpace.APP_STATE]: {
        currentMovie: movies[0],
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        userInfo: {
          id: 1,
          email: `sadas@gmail.com`,
          name: `asdasd`,
          avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
        }
      },
    });

    store.dispatch = jest.fn();

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MoviePage
                loadMovieInformation={() => {}}
                routeProps={{match: {params: {id: 167456}, isExact: true, path: ``, url: ``}}} />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
