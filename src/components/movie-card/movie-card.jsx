import React from 'react';
import {connect} from "react-redux";
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import PageHeader from '../page-header/page-header';
import {getMovieCard} from '../../store/data/selectors';
import {Link} from 'react-router-dom';
import {AppRoute, Pages} from '../../helpers/constants.js';
import MyListButton from '../my-list-button/my-list-button.jsx';

const MovieCard = ({movieCard}) => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={movieCard.background} alt={movieCard.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader
        currentPage={Pages.MAIN}
      />

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
              <Link
                className="btn btn--play movie-card__button"
                to={`${AppRoute.PLAYER}/${movieCard.id}`}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <MyListButton
                movie={movieCard}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movieCard: CustomPropTypes.MOVIE,
};

const mapStateToProps = (state) => ({
  movieCard: getMovieCard(state),
});

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
