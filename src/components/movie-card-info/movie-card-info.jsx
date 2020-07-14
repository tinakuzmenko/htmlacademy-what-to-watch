import React, {PureComponent} from 'react';
import MovieNav from '../movie-nav/movie-nav.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import {NavTabs} from '../../helpers/constants.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';

class MovieCardInfo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: NavTabs.OVERVIEW,
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(activeTab) {
    this.setState({
      currentTab: activeTab,
    });
  }

  _renderScreen() {
    const {currentMovie} = this.props;
    const {currentTab} = this.state;

    switch (currentTab) {
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
    const {currentMovie} = this.props;

    return (
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={currentMovie.poster} alt={currentMovie.title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <MovieNav
              navTabs={NavTabs}
              currentActiveTab={this.state.currentTab}
              onTabClick={this._handleTabClick}
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
};

export default MovieCardInfo;
