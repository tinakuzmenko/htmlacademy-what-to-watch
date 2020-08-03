import * as React from 'react';
import renderer from 'react-test-renderer';
import MoviePlayer from './movie-player';
import {movie} from '../../helpers/test-data';

describe(`MoviePlayer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <MoviePlayer
            currentMovie={movie}
            onExitButtonClick={() => {}}
            videoDuration={10}
            currentTime={2}
            timeLeft={`00:00:08`}
            renderPlayButton={() => {}}
            renderPauseButton={() => {}}
            isPlaying={true}
            renderVideoPlayer={() => {}}
            onFullScreenButtonClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
