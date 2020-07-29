import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from '../../store/app-state/app-state';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import PageHeader from '../page-header/page-header';
import {getMovieCard} from '../../store/data/selectors';

const MovieCard = ({movieCard, onPlayButtonClick}) => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={movieCard.background} alt={movieCard.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={movieCard.posterImage} alt={movieCard.title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movieCard.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieCard.genre}</span>
              <span className="movie-card__year">{movieCard.date}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={() => {
                  onPlayButtonClick(movieCard);
                }}
              >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movieCard: CustomPropTypes.MOVIE,
  onPlayButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movieCard: getMovieCard(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(movie) {
    dispatch(ActionCreator.setCurrentMovie(movie));
    dispatch(ActionCreator.watchMovie());
  },
});

export {MovieCard};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
