import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {movie, movies} from '../../utils/test-data.js';

const movieCard = movie;

describe(`Main`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<Main
        movieCard={movieCard}
        movies={movies}
        onSmallMovieCardClick={() => {}} />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
