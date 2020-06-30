import React from 'react';
import renderer from 'react-test-renderer';
import MoviesLikeThis from './movies-like-this.jsx';
import {movie, movies} from '../../utils/test-data.js';

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MoviesLikeThis
        movieCard={movie}
        movies={movies}
        onSmallMovieCardClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
