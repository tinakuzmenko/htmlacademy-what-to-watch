import * as React from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardHero from '../movie-card-hero/movie-card-hero';
import MovieCardInfo from '../movie-card-info/movie-card-info';
import MoviesList from '../movies-list/movies-list';
import {NavTabs, Pages} from '../../helpers/constants';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withShowMore from '../../hocs/with-show-more/with-show-more';
import {connect} from 'react-redux';
import {getCurrentMovieById} from '../../store/app-state/selectors';
import {ActionCreator} from '../../store/app-state/app-state';
import {Operations as DataOperations} from "../../store/data/data";
import {MovieInterface} from '../../types';

const MovieCardInfoWrapped = withActiveItem(MovieCardInfo);
const MoviesListWrapped = withShowMore(MoviesList);

interface MoviePageProps {
  currentMovie: MovieInterface;
  loadMovieInformation(movie: MovieInterface): void;
}

class MoviePage extends React.PureComponent<MoviePageProps, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {currentMovie, loadMovieInformation} = this.props;
    loadMovieInformation(currentMovie);
  }

  componentDidUpdate() {
    const {currentMovie, loadMovieInformation} = this.props;
    loadMovieInformation(currentMovie);
  }

  render() {
    const {currentMovie} = this.props;
    return (
      <React.Fragment>
        <section
          className="movie-card movie-card--full"
          style={{background: currentMovie.backgroundColor}}>
          <MovieCardHero
            currentMovie={currentMovie}
          />
          <MovieCardInfoWrapped
            currentMovie={currentMovie}
            defaultActiveItem={NavTabs.OVERVIEW}
          />
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesListWrapped
              currentPage={Pages.MOVIE}
            />
          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentMovie: getCurrentMovieById(state, ownProps),
});

const mapDispatchToProps = (dispatch) => ({
  loadMovieInformation(movie) {
    dispatch(ActionCreator.setCurrentMovie(movie));
    dispatch(ActionCreator.setActiveGenre(movie.genre));
    dispatch(DataOperations.loadMovieReviews(movie.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

