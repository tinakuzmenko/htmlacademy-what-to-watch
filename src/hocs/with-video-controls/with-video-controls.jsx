import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {TimeInSeconds} from '../../helpers/constants';
import {getCurrentMovie} from '../../store/app-state/selectors.js';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/app-state/app-state';

const ERROR_MESSAGE = `Sorry, your browser doesn't support embedded videos.`;

const withVideoControls = (Component) => {
  class WithVideoControls extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();
      this.state = {
        isPlaying: true,
        videoDuration: 0,
        currentTime: 0,
      };

      this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
      this._renderPlayButton = this._renderPlayButton.bind(this);
      this._renderPauseButton = this._renderPauseButton.bind(this);
      this._handlePlayPauseChange = this._handlePlayPauseChange.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._handlePlayPauseChange = this._handlePlayPauseChange.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      video.play();

      video.onloadedmetadata = () => this.setState({
        videoDuration: video.duration,
      });

      video.ontimeupdate = () => this.setState({
        currentTime: Math.trunc(video.currentTime),
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
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

    _countTimeLeft() {
      const {currentTime, videoDuration} = this.state;
      const timeDifference = videoDuration - currentTime;

      const minutes = Math.trunc(timeDifference / TimeInSeconds.MINUTE);
      const seconds = Math.trunc(timeDifference % TimeInSeconds.MINUTE);
      const hours = Math.trunc(minutes / TimeInSeconds.MINUTE);

      return [
        (`0` + hours).slice(-2),
        (`0` + minutes).slice(-2),
        (`0` + seconds).slice(-2)
      ].join(`:`);
    }

    _handlePlayPauseChange() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    _handleFullScreenButtonClick() {
      this._videoRef.current.requestFullscreen();
    }

    _renderVideoPlayer() {
      const {currentMovie} = this.props;

      return (
        <video
          ref={this._videoRef}
          className="player__video"
          poster={currentMovie.poster}
          src={currentMovie.videoLink}
        >
          {ERROR_MESSAGE}
        </video>
      );
    }

    _renderPlayButton() {
      return (
        <button
          type="button"
          className="player__play"
          onClick={() => this._handlePlayPauseChange()}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      );
    }

    _renderPauseButton() {
      return (<button
        type="button"
        className="player__play"
        onClick={() => this._handlePlayPauseChange()}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>);
    }

    render() {
      const {onExitButtonClick, currentMovie} = this.props;
      const {videoDuration, currentTime, isPlaying} = this.state;

      const timeLeft = this._countTimeLeft();

      return (
        <Component
          {...this.props}
          currentMovie={currentMovie}
          onExitButtonClick={onExitButtonClick}
          videoDuration={videoDuration}
          currentTime={currentTime}
          isPlaying={isPlaying}
          timeLeft={timeLeft}
          renderVideoPlayer={this._renderVideoPlayer}
          renderPlayButton={this._renderPlayButton}
          renderPauseButton={this._renderPauseButton}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
        />
      );
    }
  }

  WithVideoControls.propTypes = {
    currentMovie: CustomPropTypes.MOVIE,
    onExitButtonClick: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    currentMovie: getCurrentMovie(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onExitButtonClick() {
      dispatch(ActionCreator.stopWatchingMovie());
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithVideoControls);
};

export default withVideoControls;
