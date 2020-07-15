import React, {PureComponent} from 'react';

const withActiveVideo = (Component) => {
  class WithActiveVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._handleSmallMovieCardMouseEnter = this._handleSmallMovieCardMouseEnter.bind(this);
      this._handleSmallMovieCardMouseOut = this._handleSmallMovieCardMouseOut.bind(this);
    }

    _handleSmallMovieCardMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    _handleSmallMovieCardMouseOut() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onSmallMovieCardMouseEnter={this._handleSmallMovieCardMouseEnter}
          onSmallMovieCardMouseOut={this._handleSmallMovieCardMouseOut}
        />
      );
    }
  }

  return WithActiveVideo;
};

export default withActiveVideo;
