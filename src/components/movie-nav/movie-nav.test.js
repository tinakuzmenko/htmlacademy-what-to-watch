import React from 'react';
import renderer from 'react-test-renderer';
import MovieNav from './movie-nav.jsx';

describe(`MovieNav`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieNav />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
