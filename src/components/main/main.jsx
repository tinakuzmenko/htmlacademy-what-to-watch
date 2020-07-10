import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import {getMoviesGenres} from '../../helpers/utils.js';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';

const SHOWN_MOVIES = 8;

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentShownFilms: SHOWN_MOVIES,
    };

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  _handleShowMoreButtonClick() {
    this.setState((prevState) => ({currentShownFilms: prevState.currentShownFilms + SHOWN_MOVIES}));
  }

  render() {
    const {movieCard, movies, onSmallMovieCardClick, activeGenre, moviesByGenre, onGenreClick} = this.props;
    const {currentShownFilms} = this.state;

    const isMainPage = true;
    const moviesGenres = getMoviesGenres(movies);

    this._shownMovies = moviesByGenre.slice(0, currentShownFilms);

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={movieCard.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt={movieCard.title} width="218" height="327" />
              </div>

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
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList
              genres={moviesGenres}
              currentActiveGenre={activeGenre}
              onGenreClick={onGenreClick}
              onGenreFilterChange={() => this.setState({
                currentShownFilms: SHOWN_MOVIES,
              })}
            />

            <MoviesList
              movies={this._shownMovies}
              onSmallMovieCardClick={onSmallMovieCardClick}
            />

            {moviesByGenre.length > this._shownMovies.length ? <ShowMoreButton
              onShowMoreButtonClick={this._handleShowMoreButtonClick}
            /> : ``}
          </section>

          <Footer
            isMainPage={isMainPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  movieCard: CustomPropTypes.MOVIE,
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesByGenre: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movieCard: state.movieCard,
  movies: state.movies,
  activeGenre: state.activeGenre,
  moviesByGenre: state.moviesByGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.getMoviesByGenre(genre));
    dispatch(ActionCreator.getActiveGenre(genre));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
