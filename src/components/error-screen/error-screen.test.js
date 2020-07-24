import React from 'react';
import renderer from 'react-test-renderer';
import ErrorScreen from './error-screen';

describe(`ErrorScreen`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <ErrorScreen />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
