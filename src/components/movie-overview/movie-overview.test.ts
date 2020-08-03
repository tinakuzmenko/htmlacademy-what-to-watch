import * as React from 'react';
import renderer from 'react-test-renderer';
import MovieOverview from './movie-overview';
import {movie} from '../../helpers/test-data';

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
