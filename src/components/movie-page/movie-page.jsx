import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PageFooter from '../page-footer/page-footer.jsx';
import MovieNav from '../movie-nav/movie-nav.jsx';
import MoviesLikeThis from '../movies-like-this/movies-like-this.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import {NavTabs} from '../../helpers/constants.js';
import PageHeader from '../page-header/page-header.jsx';

export default class MoviePage extends PureComponent {
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
    const {movieCard, movieReviews} = this.props;
    const {currentTab} = this.state;

    switch (currentTab) {
      case NavTabs.OVERVIEW:
        return <MovieOverview
          movie={movieCard}
        />;
      case NavTabs.DETAILS:
        return <MovieDetails
          movie={movieCard}
        />;
      case NavTabs.REVIEWS:
        return <MovieReviews
          movieReviews={movieReviews}
        />;
      default:
        return <MovieOverview
          movie={movieCard}
        />;
    }
  }

  render() {
    const {movieCard, movies, onSmallMovieCardClick, isMainPage} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movieCard.background} alt={movieCard.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader isMainPage={isMainPage} />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movieCard.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movieCard.genre}</span>
                  <span className="movie-card__year">{movieCard.date}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movieCard.poster} alt={movieCard.title} width="218" height="327" />
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
        </section>

        <div className="page-content">
          <MoviesLikeThis
            movieCard={movieCard}
            movies={movies}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />
          <PageFooter
            isMainPage={isMainPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
  movieCard: CustomPropTypes.MOVIE,
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  movieReviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

