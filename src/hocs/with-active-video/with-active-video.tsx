import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  isPlaying: boolean;
  onSmallMovieCardMouseEnter(): void;
  onSmallMovieCardMouseOut(): void;
}

interface WithActiveVideoState {
  isPlaying: boolean;
}

const withActiveVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveVideo extends React.PureComponent<T, WithActiveVideoState> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.handleSmallMovieCardMouseEnter = this.handleSmallMovieCardMouseEnter.bind(this);
      this.handleSmallMovieCardMouseOut = this.handleSmallMovieCardMouseOut.bind(this);
    }

    private handleSmallMovieCardMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    private handleSmallMovieCardMouseOut() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onSmallMovieCardMouseEnter={this.handleSmallMovieCardMouseEnter}
          onSmallMovieCardMouseOut={this.handleSmallMovieCardMouseOut}
        />
      );
    }
  }

  return WithActiveVideo;
};

export default withActiveVideo;
