import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';
import {CustomPropTypes} from '../../utils/custom-prop-types.js';

export const MAX_SIMILAR_MOVIES_AMOUNT = 4;

const getFilteredMovies = (movies, currentMovie) => {
  const filteredMovies = movies.filter((movie) => {
    return movie.genre === currentMovie.genre && movie !== currentMovie;
  });

  return filteredMovies.slice(0, MAX_SIMILAR_MOVIES_AMOUNT);
};

const MoviesLikeThis = ({movieCard, movies, onSmallMovieCardClick}) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MoviesList
        movies={getFilteredMovies(movies, movieCard)}
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
    </section>
  );
};

MoviesLikeThis.propTypes = {
  movieCard: CustomPropTypes.MOVIE,
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesLikeThis;
