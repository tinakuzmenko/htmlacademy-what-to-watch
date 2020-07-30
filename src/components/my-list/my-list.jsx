import React from 'react';
import PageFooter from '../page-footer/page-footer';
import MoviesList from '../movies-list/movies-list';
import {getMovies} from '../../store/data/selectors';
import {connect} from 'react-redux';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const MyList = (props) => {
  const {movies} = props;
  console.log(props);
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesList
            movies={movies}
            render={() => {}} />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  movies: CustomPropTypes.MOVIE,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(MyList);
