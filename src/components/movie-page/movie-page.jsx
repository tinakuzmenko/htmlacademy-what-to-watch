import React from 'react';
import {connect} from 'react-redux';
import PageFooter from '../page-footer/page-footer.jsx';
import MovieCardHero from '../movie-card-hero/movie-card-hero.jsx';
import MovieCardInfo from '../movie-card-info/movie-card-info.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';


const MoviePage = ({currentMovie}) => {
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <MovieCardHero
          currentMovie={currentMovie}
        />
        <MovieCardInfo
          currentMovie={currentMovie}
        />
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList />
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
};

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,
  };
};
export default connect(mapStateToProps)(MoviePage);

