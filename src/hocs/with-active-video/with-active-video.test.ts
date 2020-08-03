import * as React from 'react';
import renderer from 'react-test-renderer';
import withActiveVideo from './with-active-video';
import {movie} from '../../helpers/test-data';

const MockComponent = () => {
  return (
    <div></div>
  );
};

it(`withActiveVideo is rendered correctly`, () => {
  const MockComponentWrapped = withActiveVideo(MockComponent);

  const tree = renderer.create((
    <MockComponentWrapped
      movie={movie}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
