import React from 'react';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import withShowMore from '../../hocs/with-show-more/with-show-more';
import {Pages} from '../../helpers/constants.js';

const MoviesListWrapped = withShowMore(MoviesList);

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <MoviesListWrapped
        currentPage={Pages.MAIN}
      />
    </section>
  );
};

export default Catalog;
