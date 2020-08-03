import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieNav from './movie-nav';
import {NavTabs} from '../../helpers/constants';
import {noop} from '../../helpers/test-data';

describe(`MovieNav`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieNav
        currentActiveItem={NavTabs.DETAILS}
        onItemClick={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
