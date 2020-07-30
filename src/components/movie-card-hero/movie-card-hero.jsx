import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {ActionCreator} from '../../store/app-state/app-state';
import PageHeader from '../page-header/page-header';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus, AppRoute} from '../../helpers/constants';
import {Link} from 'react-router-dom';

const MovieCardHero = ({currentMovie, onAddReviewClick, isSignedIn}) => {
  const addReviewButton = (
    <a
      href="add-review.html"
      className="btn movie-card__button"
      onClick={(evt) => {
        evt.preventDefault();
        onAddReviewClick();
      }}>Add review</a>
  );

  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={currentMovie.background} alt={currentMovie.title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader />
      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{currentMovie.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{currentMovie.genre}</span>
            <span className="movie-card__year">{currentMovie.date}</span>
          </p>
          <div className="movie-card__buttons">
            <Link
              className="btn btn--play movie-card__button"
              to={`${AppRoute.PLAYER}/${currentMovie.id}`}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            {isSignedIn && addReviewButton}
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCardHero.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
  onAddReviewClick: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isSignedIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviewClick() {
    dispatch(ActionCreator.addReview());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardHero);
