import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from '../../store/app-state/app-state';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {Operations as DataOperations} from "../../store/data/data";
import VideoPlayer from '../../components/video-player/video-player';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick(evt) {
    const {movie, onSmallMovieCardClick} = this.props;

    evt.preventDefault();
    onSmallMovieCardClick(movie);
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
          <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
        </h3>
      </article>);
  }
}

SmallMovieCard.propTypes = {
  movie: CustomPropTypes.MOVIE,
  isPlaying: PropTypes.bool.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardMouseEnter: PropTypes.func.isRequired,
  onSmallMovieCardMouseOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSmallMovieCardClick(movie) {
    dispatch(ActionCreator.goToMoviePage());
    dispatch(ActionCreator.setCurrentMovie(movie));
    dispatch(ActionCreator.setActiveGenre(movie.genre));
    dispatch(DataOperations.loadMovieReviews(movie.id));
  },
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
