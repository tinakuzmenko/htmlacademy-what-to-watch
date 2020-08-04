import * as React from 'react';
import PageFooter from '../page-footer/page-footer';
import MoviesList from '../movies-list/movies-list';
import {connect} from 'react-redux';
import PageHeader from '../page-header/page-header';
import {Pages} from '../../helpers/constants';
import {getFavoriteMovies} from '../../store/data/selectors';
import {MovieInterface} from '../../types';

interface MyListProps {
  favoriteMovies: Array<MovieInterface>;
}

const MyList: React.FC<MyListProps> = ({
  favoriteMovies
}: MyListProps) => {
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
          />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

export default connect(mapStateToProps)(MyList);
