import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer.jsx';

describe(`Footer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<Footer
        isMainPage={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
