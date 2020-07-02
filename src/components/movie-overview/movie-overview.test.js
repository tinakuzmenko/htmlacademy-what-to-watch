import React from 'react';
import renderer from 'react-test-renderer';
import MovieOverview from './movie-overview.jsx';
import {movie} from '../../utils/test-data.js';

describe(`MovieOverview`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieOverview
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
