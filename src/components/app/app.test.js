import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {movie, movies} from '../../utils/test-data.js';

const movieCard = movie;

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<App
        movieCard={movieCard}
        movies={movies}
        moviesReviews={[]}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
