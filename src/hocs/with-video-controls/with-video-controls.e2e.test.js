import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideoControls from './with-video-controls';
import {currentMovie} from '../../helpers/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onExitButtonClick, renderVideoPlayer} = props;

  return (
    <div>
      {renderVideoPlayer()}
      <button
        className="player__exit"
        onClick={() => {
          onExitButtonClick();
        }}
      >Exit</button>
    </div>
  );
};

MockComponent.propTypes = {
  onExitButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  renderVideoPlayer: PropTypes.func.isRequired,
};

const mockVideoElement = () => {
  Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
    configurable: true,

    get() {
      setTimeout(() => (this.onloadeddata && this.onloadeddata()));
      return () => {};
    }
  });
};

describe(`HOC withVideoControls e2e tests`, () => {
  it(`Should call prop callback onExitButtonClick on child button click`, () => {
    const MockComponentWrapped = withVideoControls(MockComponent);

    const onExitButtonClick = jest.fn();

    mockVideoElement();

    const wrapper = mount(
        <MockComponentWrapped
          onExitButtonClick={onExitButtonClick}
          currentMovie={currentMovie}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    );

    wrapper.find(`button.player__exit`).simulate(`click`);
    expect(onExitButtonClick).toHaveBeenCalledTimes(1);
  });
});
