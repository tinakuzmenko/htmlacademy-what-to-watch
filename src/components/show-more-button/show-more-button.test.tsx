import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button';
import {noop} from '../../helpers/test-data';


describe(`ShowMoreButton`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<ShowMoreButton
        onShowMoreButtonClick={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
