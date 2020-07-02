import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {CustomPropTypes} from '../../utils/custom-prop-types.js';

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null
    };

    this._handleSmallMovieCardHover = this._handleSmallMovieCardHover.bind(this);
  }

  _handleSmallMovieCardHover(movie) {
    this.setState({
      currentMovie: movie,
    });
  }

  render() {
    const {movies, onSmallMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <SmallMovieCard
              key={movie.id}
              movie={movie}
              onSmallMovieCardClick={onSmallMovieCardClick}
              onSmallMovieCardHover={this._handleSmallMovieCardHover}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};
