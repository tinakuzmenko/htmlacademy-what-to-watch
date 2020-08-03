import * as React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button';


describe(`ShowMoreButton`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<ShowMoreButton
        onShowMoreButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
