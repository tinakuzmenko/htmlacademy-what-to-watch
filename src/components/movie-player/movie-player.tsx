import * as React from 'react';
import {MovieInterface} from '../../types';

interface MoviePlayerProps {
  currentMovie: MovieInterface;
  videoDuration: number;
  currentTime: number;
  timeLeft: string;
  isPlaying: boolean;
  renderPlayButton(): React.ReactNode;
  renderPauseButton(): React.ReactNode;
  renderVideoPlayer(): React.ReactNode;
  onExitButtonClick(): void;
  onFullScreenButtonClick(): void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({
  currentMovie,
  onExitButtonClick,
  videoDuration,
  currentTime,
  timeLeft,
  renderPlayButton,
  renderPauseButton,
  isPlaying,
  renderVideoPlayer,
  onFullScreenButtonClick
}: MoviePlayerProps) => {
  const togglePosition = `${((currentTime / videoDuration) * 100)}%`;

  return (
    <div className="player">
      {renderVideoPlayer()}
      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClick}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={videoDuration}></progress>
            <div className="player__toggler" style={{left: togglePosition}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ? renderPauseButton() : renderPlayButton()}

          <div className="player__name">{currentMovie.title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;
