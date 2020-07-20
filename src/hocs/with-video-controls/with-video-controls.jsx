import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const ERROR_MESSAGE = `Sorry, your browser doesn't support embedded videos.`;

const withVideoControls = (Component) => {
  class WithVideoControls extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();
      this.state = {
        isPlaying: true,
      };

      this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
      this._renderButtonPause = this._renderButtonPause.bind(this);
      this._renderButtonPlay = this._renderButtonPlay.bind(this);
      this._handleChangeClick = this._handleChangeClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      const {currentMovie} = this.props;
      const video = this._videoRef.current;

      video.poster = currentMovie.poster;
      video.src = currentMovie.videoLink;

      video.play();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handleChangeClick() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    _handleFullScreenButtonClick() {
      this._videoRef.current.requestFullscreen();
    }

    _renderButtonPlay() {
      return (
        <button
          type="button"
          className="player__play"
          onClick={this._handleChangeClick}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      );
    }

    _renderButtonPause() {
      return (
        <button
          type="button"
          className="player__play"
          onClick={this._handleChangeClick}>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </button>
      );
    }

    _renderVideoPlayer() {
      return (
        <video
          ref={this._videoRef}
          className="player__video"
        >
          {ERROR_MESSAGE}
        </video>
      );
    }

    render() {
      const {onExitButtonClick, currentMovie} = this.props;

      return (
        <Component
          {...this.props}
          currentMovie={currentMovie}
          // videoDuration={this.state.videoDuration}
          isPlaying={this.state.isPlaying}
          renderVideoPlayer={this._renderVideoPlayer}
          renderButtonPlay={this._renderButtonPlay}
          renderButtonPause={this._renderButtonPause}
          onExitButtonClick={onExitButtonClick}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
        />
      );
    }
  }

  WithVideoControls.propTypes = {
    currentMovie: CustomPropTypes.MOVIE,
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithVideoControls;
};

export default withVideoControls;
