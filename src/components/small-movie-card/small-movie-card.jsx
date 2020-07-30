import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import VideoPlayer from '../../components/video-player/video-player';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../helpers/constants';
import history from '../../history';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick(evt) {
    const {movie} = this.props;

    evt.preventDefault();
    history.push(`${AppRoute.MOVIE}/${movie.id}`);
  }

  render() {
    const {movie, isPlaying, onSmallMovieCardMouseEnter, onSmallMovieCardMouseOut} = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          onSmallMovieCardMouseEnter();
        }}
        onMouseOut={() => {
          onSmallMovieCardMouseOut();
        }}
      >
        <div
          onClick={this._handleMovieClick}
          className="small-movie-card__image"
        >
          <VideoPlayer
            muted
            isPlaying={isPlaying}
            source={movie.preview}
            poster={movie.poster}
          />
        </div>
        <h3
          onClick={this._handleMovieClick}
          className="small-movie-card__title"
        >
          <Link
            className="small-movie-card__link"
            to={`${AppRoute.MOVIE}/${movie.id}`}>
            {movie.title}
          </Link>
        </h3>
      </article>);
  }
}

SmallMovieCard.propTypes = {
  movie: CustomPropTypes.MOVIE,
  isPlaying: PropTypes.bool.isRequired,
  onSmallMovieCardMouseEnter: PropTypes.func.isRequired,
  onSmallMovieCardMouseOut: PropTypes.func.isRequired,
};

export default SmallMovieCard;
