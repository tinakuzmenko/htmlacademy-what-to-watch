import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const ERROR_MESSAGE = `Sorry, your browser doesn't support embedded videos.`;

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._playTimeout = null;

    this.isPlaying = props.isPlaying;
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
    video.onplay = null;

    clearTimeout(this._playTimeout);
  }

  render() {
    return (
      <React.Fragment>
        <video
          width="280"
          height="175"
          ref={this._videoRef}
          onMouseOver={(evt) => evt.target.play()}
          onMouseOut={(evt) => evt.target.pause()}
          muted
        >
          {ERROR_MESSAGE}
        </video>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this._playTimeout);
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
