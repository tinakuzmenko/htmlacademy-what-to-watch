import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';

const Catalog = ({onSmallMovieCardClick}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <MoviesList
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
    </section>
  );
};

Catalog.propTypes = {
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default Catalog;
