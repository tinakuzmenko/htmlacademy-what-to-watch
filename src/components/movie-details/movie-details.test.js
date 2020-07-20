import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';
import {movie} from '../../helpers/test-data';

describe(`MovieDetails`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieDetails
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
