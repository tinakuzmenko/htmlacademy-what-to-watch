import * as React from 'react';
import {smallVideoPlayer, ERROR_MESSAGE} from '../../helpers/constants';

interface VideoPlayerProps {
  muted: boolean;
  source: string;
  poster: string;
  isPlaying: boolean;
}

export default class VideoPlayer extends React.PureComponent<VideoPlayerProps, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>;
  private playTimeout: NodeJS.Timeout;

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.playTimeout = null;
  }

  componentDidMount() {
    const {muted, source, poster} = this.props;
    const video = this.videoRef.current;

    video.src = source;
    video.poster = poster;
    video.muted = muted;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = ``;
    video.poster = ``;
    video.muted = null;

    clearTimeout(this.playTimeout);
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

    if (isPlaying) {
      this.playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this.playTimeout);
    }
  }

  render() {
    return (
      <video
        ref={this.videoRef}
        width={smallVideoPlayer.WIDTH}
        height={smallVideoPlayer.HEIGHT}
      >
        {ERROR_MESSAGE}
      </video>
    );
  }
}
