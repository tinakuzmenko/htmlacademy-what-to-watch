import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviePlayer from './movie-player';
import {movie, noop} from '../../helpers/test-data';

describe(`MoviePlayer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <MoviePlayer
            currentMovie={movie}
            onExitButtonClick={noop}
            videoDuration={10}
            currentTime={2}
            timeLeft={`00:00:08`}
            renderPlayButton={noop}
            renderPauseButton={noop}
            renderVideoPlayer={noop}
            isPlaying={true}
            onFullScreenButtonClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
