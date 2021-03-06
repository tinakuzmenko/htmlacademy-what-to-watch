import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Loader from './loader';

describe(`Loader`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <Loader />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
