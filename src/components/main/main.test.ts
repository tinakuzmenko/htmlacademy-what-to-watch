import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main';
import {movie, movies, reviews} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';
import {Router} from 'react-router-dom';
import history from '../../history';

const mockStore = configureStore([]);

describe(`Main`, () => {
  it(`Should render correctly`, () => {

    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard: movie,
        movies,
        moviesReviews: reviews,
      },
      [NameSpace.APP_STATE]: {
        activeGenre: `All genres`,
        currentMovie: movie,
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

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <Main />
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
