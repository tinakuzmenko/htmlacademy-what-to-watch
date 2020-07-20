import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {ActionCreator} from '../../reducer/reducer.js';
import {connect} from "react-redux";

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
      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handlePauseButtonClick = this._handlePauseButtonClick.bind(this);
    }

    componentDidMount() {
      const {currentMovie} = this.props;
      const video = this._videoRef.current;

      video.src = currentMovie.videoLink;
      video.poster = currentMovie.poster;

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

    _handlePlayButtonClick() {
      this.setState({
        isPlaying: true
      });
    }

    _handlePauseButtonClick() {
      this.setState({
        isPlaying: false
      });
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
      const {onExitClick, currentMovie} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          renderVideoPlayer={this._renderVideoPlayer}
          currentMovie={currentMovie}
          onExitClick={onExitClick}
          onPlayButtonClick={this._handlePlayButtonClick}
          onPauseButtonClick={this._handlePauseButtonClick}
        />
      );
    }
  }

  WithVideoControls.propTypes = {
    currentMovie: CustomPropTypes.MOVIE,
    onExitClick: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onExitClick() {
      dispatch(ActionCreator.stopWatchingMovie());
    },
  });

  const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie,
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithVideoControls);
};

export default withVideoControls;
