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
          reviews={moviesReviews}
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

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movieCard={this.state.currentMovie}
              movies={this.props.movies}
              reviews={this.props.moviesReviews}
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
