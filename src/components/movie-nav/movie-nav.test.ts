import * as React from 'react';
import renderer from 'react-test-renderer';
import MovieNav from './movie-nav';
import {NavTabs} from '../../helpers/constants';


describe(`MovieNav`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieNav
        navTabs={NavTabs}
        currentActiveItem={NavTabs.DETAILS}
        onItemClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
