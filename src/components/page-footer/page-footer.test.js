import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from './page-footer.jsx';

describe(`Footer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<PageFooter
        isMainPage={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
