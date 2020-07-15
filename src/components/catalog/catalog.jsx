import React from 'react';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import withLoadMore from '../../hocs/with-load-more/with-load-more.jsx';

const MoviesListWrapped = withLoadMore(MoviesList);

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <MoviesListWrapped />
    </section>
  );
};

export default Catalog;
