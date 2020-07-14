import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SHOWN_MOVIES, Pages} from '../../helpers/constants.js';
import {filterMoviesByGenre} from '../../helpers/utils.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shownMovies: props.movies.slice(0, SHOWN_MOVIES),
    };

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {activeGenre, movies} = this.props;

    if (prevProps.activeGenre !== activeGenre || prevProps.movies !== movies) {
      this.setState({
        shownMovies: movies.slice(0, SHOWN_MOVIES),
      });
    }
  }

  _handleShowMoreButtonClick() {
    this.setState((prevState) => ({
      shownMovies: [
        ...prevState.shownMovies,
        ...this.props.movies.slice(
            prevState.shownMovies.length,
            prevState.shownMovies.length + SHOWN_MOVIES
        )
      ]
    }));
  }

  render() {
    const {movies} = this.props;
    const {shownMovies} = this.state;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {shownMovies.map((movie) => {
            return (
              <SmallMovieCard
                key={movie.id}
                movie={movie}
              />
            );
          })}
        </div>
        {movies.length > shownMovies.length && <ShowMoreButton
          onShowMoreButtonClick={this._handleShowMoreButtonClick}
        />}
      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  activeGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  if (state.currentPage !== Pages.MAIN) {
    return {
      movies: filterMoviesByGenre(state.movies, state.activeGenre)
                .filter((movie) => movie.title !== state.currentMovie.title)
                .slice(0, 4),
      activeGenre: state.activeGenre,
    };
  }

  return {
    movies: filterMoviesByGenre(state.movies, state.activeGenre),
    activeGenre: state.activeGenre,
  };
};

export default connect(mapStateToProps)(MoviesList);
