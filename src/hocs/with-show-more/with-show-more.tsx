import * as React from 'react';
import {connect} from 'react-redux';
import {SHOWN_MOVIES, Pages} from '../../helpers/constants';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {getFilteredMoviesByGenre, getFilteredMoviesLikeThis} from '../../store/data/selectors';
import {MovieInterface} from '../../types';

interface WithShowMoreProps {
  movies: Array<MovieInterface>;
}

interface WithShowMoreState {
  shownMovies: Array<MovieInterface>;
}


const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent<WithShowMoreProps, WithShowMoreState> {
    constructor(props) {
      super(props);

      this.state = {
        shownMovies: props.movies.slice(0, SHOWN_MOVIES),
      };

      this.renderButtonShowMore = this.renderButtonShowMore.bind(this);
      this.handleShowMoreButtonClick = this.handleShowMoreButtonClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          shownMovies: this.props.movies.slice(0, SHOWN_MOVIES),
        });
      }
    }

    private handleShowMoreButtonClick() {
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

    private renderButtonShowMore() {
      return (
        this.props.movies.length > this.state.shownMovies.length && <ShowMoreButton
          onShowMoreButtonClick={this.handleShowMoreButtonClick}
        />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          movies={this.state.shownMovies}
          render={this.renderButtonShowMore}
        />
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    if (ownProps.currentPage !== Pages.MAIN) {
      return {
        movies: getFilteredMoviesLikeThis(state),
      };
    }

    return {
      movies: getFilteredMoviesByGenre(state),
    };
  };

  return connect(mapStateToProps)(WithShowMore);
};

export default withShowMore;
