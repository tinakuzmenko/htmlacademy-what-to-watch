import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducer/reducer.js';
import {Pages} from '../../helpers/constants.js';
import {getMoviesReviews} from '../../helpers/utils.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {movies, moviesReviews, onSmallMovieCardClick, currentPage, currentMovie, isMainPage} = this.props;

    switch (currentPage) {
      case Pages.MAIN:
        return (
          <Main
            isMainPage={isMainPage}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />
        );
      case Pages.MOVIE:
        return (
          <MoviePage
            isMainPage={isMainPage}
            movieCard={currentMovie}
            movies={movies}
            movieReviews={getMoviesReviews(moviesReviews, currentMovie)}
            onSmallMovieCardClick={onSmallMovieCardClick} />
        );
      default:
        return (
          <Main
            isMainPage={isMainPage}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />
        );
    }
  }

  render() {
    const {movieCard, movies, onSmallMovieCardClick, isMainPage, moviesReviews, currentMovie} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              isMainPage={isMainPage}
              movieCard={movieCard}
              movies={movies}
              movieReviews={getMoviesReviews(moviesReviews, currentMovie)}
              onSmallMovieCardClick={onSmallMovieCardClick} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  movieCard: CustomPropTypes.MOVIE,
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  moviesReviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  currentMovie: PropTypes.shape(CustomPropTypes.MOVIE).isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movieCard: state.movieCard,
  movies: state.movies,
  moviesReviews: state.moviesReviews,
  currentPage: state.currentPage,
  currentMovie: state.currentMovie,
  isMainPage: state.isMainPage,
});

const mapDispatchToProps = (dispatch) => ({
  onSmallMovieCardClick(movie) {
    dispatch(ActionCreator.goToMoviePage(movie));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
