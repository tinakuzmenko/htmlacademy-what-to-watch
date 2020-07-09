import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import {Pages} from '../../helpers/constants.js';
import {getMoviesReviews} from '../../helpers/utils.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: Pages.MAIN,
      currentMovie: this.props.movieCard,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _renderApp() {
    const {movies, moviesReviews} = this.props;
    const {currentPage, currentMovie} = this.state;

    this._moviesReviews = getMoviesReviews(moviesReviews, currentMovie);

    if (currentPage === Pages.MAIN) {
      return (
        <Main
          onSmallMovieCardClick={this._handleMovieClick}
        />
      );
    }

    if (currentPage === Pages.FILM) {
      return (
        <MoviePage
          movieCard={currentMovie}
          movies={movies}
          movieReviews={this._moviesReviews}
          onSmallMovieCardClick={this._handleMovieClick} />
      );
    }

    return null;
  }

  _handleMovieClick(movie) {
    this.setState({
      currentPage: Pages.FILM,
      currentMovie: movie,
    });
  }

  render() {
    const {movieCard, movies} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movieCard={movieCard}
              movies={movies}
              movieReviews={this._moviesReviews}
              onSmallMovieCardClick={this._handleMovieClick} />
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
};

const mapStateToProps = (state) => ({
  movieCard: state.movieCard,
  movies: state.movies,
  moviesReviews: state.moviesReviews,
});

export {App};
export default connect(mapStateToProps)(App);
