import React from 'react';
import PropTypes from 'prop-types';
import Catalog from '../catalog/catalog.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

const Main = ({onSmallMovieCardClick, isMainPage}) => {
  return (
    <React.Fragment>
      <MovieCard
        isMainPage={isMainPage}
      />
      <div className="page-content">
        <Catalog
          onSmallMovieCardClick={onSmallMovieCardClick} />
        <PageFooter
          isMainPage={isMainPage}
        />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  onSmallMovieCardClick: PropTypes.func.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

export default Main;
