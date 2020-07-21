import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const MoviePlayer = ({
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
}) => {
  const togglePosition = `${((currentTime / videoDuration) * 100)}%`;

  return (
    <div className="player">
      {renderVideoPlayer()}
      <button
        type="button"
        className="player__exit"
        onClick={() => onExitButtonClick}
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
            onClick={() => onFullScreenButtonClick()}
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

MoviePlayer.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
  isPlaying: PropTypes.bool.isRequired,
  renderVideoPlayer: PropTypes.func.isRequired,
  renderPlayButton: PropTypes.func.isRequired,
  renderPauseButton: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  videoDuration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  timeLeft: PropTypes.string.isRequired,
};

export default MoviePlayer;
