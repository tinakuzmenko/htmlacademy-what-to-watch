import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const MoviePlayer = ({isPlaying, renderVideoPlayer, renderButtonPlay, renderButtonPause, currentMovie, onExitButtonClick, onFullScreenButtonClick}) => {
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
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{`1:32:08`}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ? renderButtonPause() : renderButtonPlay()}

          <div className="player__name">{currentMovie.title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={(evt) => {
              evt.preventDefault();
              onFullScreenButtonClick();
            }}
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
  renderButtonPause: PropTypes.func.isRequired,
  renderButtonPlay: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  // videoDuration: PropTypes.number.isRequired
};

export default MoviePlayer;
