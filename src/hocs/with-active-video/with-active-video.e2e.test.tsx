import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveVideo from './with-active-video';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onSmallMovieCardMouseEnter} = props;

  return (
    <article
      onMouseEnter={onSmallMovieCardMouseEnter}
      onMouseOut={onSmallMovieCardMouseEnter}
    >
    </article>
  );
};

describe(`HOC withActiveVideo e2e tests`, () => {
  it(`Should return correct state on HOC's callback`, () => {
    const MockComponentWrapped = withActiveVideo(MockComponent);
    const onItemMouseEnter = jest.fn();
    const onItemMouseOut = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped
          onSmallMovieCardMouseEnter={onItemMouseEnter}
          onSmallMovieCardMouseOut={onItemMouseOut}
        />
    );

    expect(wrapper.state().isPlaying).toBe(false);
    wrapper.instance()._handleSmallMovieCardMouseEnter();
    expect(wrapper.state().isPlaying).toBe(true);
    wrapper.instance()._handleSmallMovieCardMouseOut();
    expect(wrapper.state().isPlaying).toBe(false);
  });
});
