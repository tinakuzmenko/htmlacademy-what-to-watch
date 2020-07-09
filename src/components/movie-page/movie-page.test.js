import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';
import {movie, movies, reviews} from '../../helpers/test-data.js';

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MoviePage
        movieCard={movie}
        movies={movies}
        movieReviews={reviews}
        onSmallMovieCardClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
