import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Catalog from './catalog';
import {movieCard, movie, movies} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

describe(`Catalog`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard,
        movies,
      },

      [NameSpace.APP_STATE]: {
        activeGenre: `All genres`,
        currentPage: `main`,
        currentMovie: movie,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Catalog
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
