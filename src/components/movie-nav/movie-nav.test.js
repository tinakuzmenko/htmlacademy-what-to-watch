import React from 'react';
import renderer from 'react-test-renderer';
import MovieNav from './movie-nav';
import {NavTabs} from '../../helpers/constants';


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
