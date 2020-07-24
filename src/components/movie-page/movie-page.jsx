import React from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardHero from '../movie-card-hero/movie-card-hero';
import MovieCardInfo from '../movie-card-info/movie-card-info';
import MoviesList from '../movies-list/movies-list';
import {NavTabs} from '../../helpers/constants';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withShowMore from '../../hocs/with-show-more/with-show-more';

const MovieCardInfoWrapped = withActiveItem(MovieCardInfo);
const MoviesListWrapped = withShowMore(MoviesList);

const MoviePage = () => {
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <MovieCardHero />
        <MovieCardInfoWrapped
          defaultActiveItem={NavTabs.OVERVIEW}
        />
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesListWrapped />
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
};

export default MoviePage;

