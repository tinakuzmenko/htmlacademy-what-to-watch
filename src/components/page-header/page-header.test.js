import React from 'react';
import renderer from 'react-test-renderer';

import {PageHeader} from './page-header';

describe(`PageHeader`, () => {
  it(`Should render correctly when is main page`, () => {
    const tree = renderer
      .create(<PageHeader
        isMainPage={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly when is not main page`, () => {
    const tree = renderer
      .create(<PageHeader
        isMainPage={false}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
