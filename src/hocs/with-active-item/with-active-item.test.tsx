import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withActiveItem from './with-active-item';
import {movie} from '../../helpers/test-data';

const MockComponent = () => {
  return (
    <div></div>
  );
};

it(`withActiveItem is rendered correctly`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);

  const tree = renderer.create((
    <MockComponentWrapped
      currentMovie={movie}
      defaultActiveItem={`Default`}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
