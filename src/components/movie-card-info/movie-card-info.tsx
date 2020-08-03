import * as React from 'react';
import MovieNav from '../movie-nav/movie-nav';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {NavTabs} from '../../helpers/constants';
import {getMovieReviews} from '../../store/data/selectors';
import {connect} from 'react-redux';

class MovieCardInfo extends React.PureComponent {
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
        return <MovieReviews
          movie={currentMovie}
        />;
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
            <img src={currentMovie.posterImage} alt={currentMovie.title} width="218" height="327" />
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

const mapStateToProps = (state) => ({
  movieReviews: getMovieReviews(state),
});

export {MovieCardInfo};
export default connect(mapStateToProps)(MovieCardInfo);
