import React from 'react';
import Catalog from '../catalog/catalog';
import MovieCard from '../movie-card/movie-card';
import PageFooter from '../page-footer/page-footer';

const Main = () => {
  return (
    <React.Fragment>
      <MovieCard />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </React.Fragment>
  );
};

export default Main;
