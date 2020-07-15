import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import {MAX_SHOWN_MOVIES_LIKE_THIS, SHOWN_MOVIES, Pages} from '../../helpers/constants.js';
import {filterMoviesByGenre} from '../../helpers/utils.js';
import {connect} from 'react-redux';

const withLoadMore = (Component) => {
  class WithLoadMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        shownMovies: props.movies.slice(0, SHOWN_MOVIES),
      };

      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          shownMovies: this.props.movies.slice(0, SHOWN_MOVIES),
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
      return (
        <Component
          {...this.props}
          onShowMoreButtonClick={this._handleShowMoreButtonClick}
          shownMovies={this.state.shownMovies}
          movies={this.props.movies}
        />
      );
    }
  }

  WithLoadMore.propTypes = {
    movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  };

  const mapStateToProps = (state) => {
    if (state.currentPage !== Pages.MAIN) {
      return {
        movies: filterMoviesByGenre(state.movies, state.activeGenre)
                .filter((movie) => movie.title !== state.currentMovie.title)
                .slice(0, MAX_SHOWN_MOVIES_LIKE_THIS),
        activeGenre: state.activeGenre,
      };
    }

    return {
      movies: filterMoviesByGenre(state.movies, state.activeGenre),
      activeGenre: state.activeGenre,
    };
  };

  return connect(mapStateToProps)(WithLoadMore);
};

export default withLoadMore;
