import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header';

describe(`PageHeader`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<PageHeader
        isMainPage={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
