import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';

import withActiveVideo from './with-active-video';

configure({
  adapter: new Adapter(),
});

interface MockComponentProps {
  onSmallMovieCardMouseEnter(): void;
  onItemMouseOut(): void;
}

const MockComponent = (props: MockComponentProps) => {
  const {onSmallMovieCardMouseEnter, onItemMouseOut} = props;

  return (
    <article
      onMouseEnter={onSmallMovieCardMouseEnter}
      onMouseOut={onItemMouseOut}
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
    wrapper.instance().handleSmallMovieCardMouseEnter();
    expect(wrapper.state().isPlaying).toBe(true);
    wrapper.instance().handleSmallMovieCardMouseOut();
    expect(wrapper.state().isPlaying).toBe(false);
  });
});
