import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {SHOWN_MOVIES} from '../../helpers/constants.js';
import {ActionCreator} from '../../reducer/reducer.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import {getMoviesGenres} from '../../helpers/utils.js';
import MovieCard from '../movie-card/movie-card.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';

export class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shownMovies: props.moviesByGenre.slice(0, SHOWN_MOVIES),
    };

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeGenre !== this.props.activeGenre) {
      this.setState({
        shownMovies: this.props.moviesByGenre.slice(0, SHOWN_MOVIES),
      });
    }
  }

  _handleShowMoreButtonClick() {
    this.setState((prevState) => ({
      shownMovies: [
        ...prevState.shownMovies,
        ...this.props.moviesByGenre.slice(
            prevState.shownMovies.length,
            prevState.shownMovies.length + SHOWN_MOVIES
        )
      ]
    }));
  }

  render() {
    const {movieCard, movies, onSmallMovieCardClick, activeGenre, moviesByGenre, onGenreClick} = this.props;
    const {shownMovies} = this.state;

    const isMainPage = true;
    const moviesGenres = getMoviesGenres(movies);

    return (
      <React.Fragment>
        <MovieCard movieCard={movieCard} />
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList
              genres={moviesGenres}
              currentActiveGenre={activeGenre}
              onGenreClick={onGenreClick}
            />

            <MoviesList
              movies={shownMovies}
              onSmallMovieCardClick={onSmallMovieCardClick}
            />

            {moviesByGenre.length > shownMovies.length && <ShowMoreButton
              onShowMoreButtonClick={this._handleShowMoreButtonClick}
            />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
