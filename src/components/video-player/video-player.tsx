import * as React from 'react';
import {smallVideoPlayer} from '../../helpers/constants';

const ERROR_MESSAGE = `Sorry, your browser doesn't support embedded videos.`;

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.React.createRef();
    this._playTimeout = null;
  }

  componentDidMount() {
    const {muted, source, poster} = this.props;
    const video = this._videoRef.current;

    video.src = source;
    video.poster = poster;
    video.muted = muted;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
    video.muted = null;

    clearTimeout(this._playTimeout);
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        width={smallVideoPlayer.WIDTH}
        height={smallVideoPlayer.HEIGHT}
      >
        {ERROR_MESSAGE}
      </video>
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      this._playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this._playTimeout);
    }
  }
}
