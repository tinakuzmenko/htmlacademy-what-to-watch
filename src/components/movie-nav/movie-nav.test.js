import React from 'react';
import renderer from 'react-test-renderer';
import MovieNav from './movie-nav.jsx';

const NavTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};


describe(`MovieNav`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieNav
        navTabs={NavTabs}
        currentActiveTab={NavTabs.DETAILS}
        onTabClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
