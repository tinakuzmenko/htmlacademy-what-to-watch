import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {movie} from '../../helpers/test-data.js';

describe(`MovieCard`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieCard
        movieCard={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
