import React from 'react';
import PropTypes from 'prop-types';
import PageFooter from '../page-footer/page-footer';
import MoviesList from '../movies-list/movies-list';
import {connect} from 'react-redux';
import PageHeader from '../page-header/page-header';
import {Pages} from '../../helpers/constants.js';
import {getFavoriteMovies} from '../../store/data/selectors.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const MyList = (props) => {
  const {favoriteMovies} = props;

  return (
    <React.Fragment>
      <div className="user-page">
        <PageHeader
          currentPage={Pages.MY_LIST}
        />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesList
            movies={favoriteMovies}
            render={() => {}} />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  favoriteMovies: PropTypes.oneOfType([
    PropTypes.arrayOf(CustomPropTypes.MOVIE),
    PropTypes.arrayOf(undefined)
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

export default connect(mapStateToProps)(MyList);
