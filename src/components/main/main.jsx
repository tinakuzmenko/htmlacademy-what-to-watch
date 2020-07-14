import React from 'react';
import Catalog from '../catalog/catalog.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

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
