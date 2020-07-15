import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {MAX_SHOWN_MOVIES_LIKE_THIS, SHOWN_MOVIES, Pages} from '../../helpers/constants';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {filterMoviesByGenre} from '../../helpers/utils';
import ShowMoreButton from '../../components/show-more-button/show-more-button';

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        shownMovies: props.movies.slice(0, SHOWN_MOVIES),
      };

      this._renderButtonShowMore = this._renderButtonShowMore.bind(this);
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

    _renderButtonShowMore() {
      return (
        this.props.movies.length > this.state.shownMovies.length && <ShowMoreButton
          onShowMoreButtonClick={this._handleShowMoreButtonClick}
        />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          movies={this.state.shownMovies}
          render={this._renderButtonShowMore}
        />
      );
    }
  }

  WithShowMore.propTypes = {
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

  return connect(mapStateToProps)(WithShowMore);
};

export default withShowMore;
