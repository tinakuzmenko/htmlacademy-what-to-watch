import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {CustomPropTypes} from '../../utils/custom-prop-types.js';


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: `main`,
      currentMovie: this.props.movieCard,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }


  _renderApp() {
    const {movieCard, movies, moviesReviews} = this.props;
    const {currentPage, currentMovie} = this.state;

    this._movieReviews = this._getCurrentMovieReviews(moviesReviews, currentMovie);

    if (currentPage === `main`) {
      return (
        <Main
          movieCard={movieCard}
          movies={movies}
          onSmallMovieCardClick={this._handleMovieClick} />
      );
    }

    if (currentPage === `film`) {
      return (
        <MoviePage
          movieCard={currentMovie}
          movies={movies}
          movieReviews={this._movieReviews}
          onSmallMovieCardClick={this._handleMovieClick} />
      );
    }

    return null;
  }

  _handleMovieClick(movie) {
    this.setState({
      currentPage: `film`,
      currentMovie: movie,
    });
  }

  _getCurrentMovieReviews(allReviews, movie) {
    const currentMovieReviews = allReviews.filter((movieReviews) => movieReviews.movie === movie.title);
    return currentMovieReviews;
  }

  render() {
    const {moviesReviews} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movieCard={this.props.movies[1]}
              movies={this.props.movies}
              movieReviews={this._getCurrentMovieReviews(moviesReviews, this.props.movies[1])}
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
  moviesReviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired
};
