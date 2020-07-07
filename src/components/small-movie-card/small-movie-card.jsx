import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._movie = this.props.movie;

    this.state = {
      isPlaying: false,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick(evt) {
    const onSmallMovieCardClick = this.props. onSmallMovieCardClick;

    evt.preventDefault();
    onSmallMovieCardClick(this._movie);
  }

  render() {
    const onSmallMovieCardHover = this.props.onSmallMovieCardHover;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this.setState({
            isPlaying: true,
          });
          onSmallMovieCardHover(this._movie);
        }}
        onMouseOut={() => {
          this.setState({
            isPlaying: false,
          });
        }}
      >
        <div
          onClick={this._handleMovieClick}
          className="small-movie-card__image">
          <VideoPlayer
            muted
            isPlaying={this.state.isPlaying}
            source={this._movie.preview}
            poster={this._movie.poster}
          />
        </div>
        <h3
          onClick={this._handleMovieClick}
          className="small-movie-card__title"
        >
          <a className="small-movie-card__link" href="movie-page.html">{this._movie.title}</a>
        </h3>
      </article>);
  }
}

SmallMovieCard.propTypes = {
  movie: CustomPropTypes.MOVIE,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
};
