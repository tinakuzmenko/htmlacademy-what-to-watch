import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieNav from '../movie-nav/movie-nav';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {NavTabs} from '../../helpers/constants';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

class MovieCardInfo extends PureComponent {
  _renderScreen() {
    const {currentMovie, currentActiveItem} = this.props;

    switch (currentActiveItem) {
      case NavTabs.OVERVIEW:
        return <MovieOverview
          movie={currentMovie}
        />;
      case NavTabs.DETAILS:
        return <MovieDetails
          movie={currentMovie}
        />;
      case NavTabs.REVIEWS:
        return <MovieReviews />;
      default:
        return <MovieOverview
          movie={currentMovie}
        />;
    }
  }

  render() {
    const {currentMovie, onItemClick, currentActiveItem} = this.props;

    return (
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={currentMovie.poster} alt={currentMovie.title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <MovieNav
              navTabs={NavTabs}
              currentActiveItem={currentActiveItem}
              onItemClick={onItemClick}
            />

            {this._renderScreen()}
          </div>
        </div>
      </div>
    );
  }
}

MovieCardInfo.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
  defaultActiveItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  currentActiveItem: PropTypes.string.isRequired,
};

export default MovieCardInfo;
