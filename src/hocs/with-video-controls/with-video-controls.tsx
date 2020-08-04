import * as React from 'react';
import {TimeInSeconds, ERROR_MESSAGE} from '../../helpers/constants';
import {getCurrentMovieById} from '../../store/app-state/selectors';
import {connect} from 'react-redux';
import history from '../../history';
import {MovieInterface} from '../../types';

interface WithVideoControlsProps {
  currentMovie: MovieInterface;
}

interface WithVideoControlsState {
  videoDuration: number;
  currentTime: number;
  isPlaying: boolean;
}

const withVideoControls = (Component) => {
  class WithVideoControls extends React.PureComponent<WithVideoControlsProps, WithVideoControlsState> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();
      this.state = {
        isPlaying: true,
        videoDuration: 0,
        currentTime: 0,
      };

      this.renderVideoPlayer = this.renderVideoPlayer.bind(this);
      this.renderPlayButton = this.renderPlayButton.bind(this);
      this.renderPauseButton = this.renderPauseButton.bind(this);
      this.handlePlayPauseChange = this.handlePlayPauseChange.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
      this.handlePlayPauseChange = this.handlePlayPauseChange.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;
      video.play();

      video.onloadedmetadata = () => this.setState({
        videoDuration: video.duration,
      });

      video.ontimeupdate = () => this.setState({
        currentTime: Math.trunc(video.currentTime),
      });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this.videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    private countTimeLeft() {
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

    private handlePlayPauseChange() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    private handleFullScreenButtonClick() {
      this.videoRef.current.requestFullscreen();
    }

    private renderVideoPlayer() {
      const {currentMovie} = this.props;

      return (
        <video
          ref={this.videoRef}
          className="player__video"
          poster={currentMovie.poster}
          src={currentMovie.videoLink}
        >
          {ERROR_MESSAGE}
        </video>
      );
    }

    private renderPlayButton() {
      return (
        <button
          type="button"
          className="player__play"
          onClick={() => this.handlePlayPauseChange()}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      );
    }

    private renderPauseButton() {
      return (<button
        type="button"
        className="player__play"
        onClick={() => this.handlePlayPauseChange()}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>);
    }

    render() {
      const {currentMovie} = this.props;
      const {videoDuration, currentTime, isPlaying} = this.state;

      const timeLeft = this.countTimeLeft();

      return (
        <Component
          {...this.props}
          currentMovie={currentMovie}
          onExitButtonClick={() => history.goBack()}
          videoDuration={videoDuration}
          currentTime={currentTime}
          isPlaying={isPlaying}
          timeLeft={timeLeft}
          renderVideoPlayer={this.renderVideoPlayer}
          renderPlayButton={this.renderPlayButton}
          renderPauseButton={this.renderPauseButton}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
        />
      );
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    currentMovie: getCurrentMovieById(state, ownProps),
  });

  return connect(mapStateToProps)(WithVideoControls);
};

export default withVideoControls;
