import * as React from 'react';

interface WithActiveVideoState {
  isPlaying: boolean;
}

const withActiveVideo = (Component) => {
  class WithActiveVideo extends React.PureComponent<{}, WithActiveVideoState> {
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
