import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const ERROR_MESSAGE = `Sorry, your browser doesn't support embedded videos.`;

class VideoPlayerFullScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const {source, poster} = this.props;
    const video = this._videoRef.current;

    video.src = source;
    video.poster = poster;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        className="player__video"
      >
        {ERROR_MESSAGE}
      </video>
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayerFullScreen.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayerFullScreen;
