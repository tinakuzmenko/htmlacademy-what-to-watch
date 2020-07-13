import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SHOWN_MOVIES} from '../../helpers/constants.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null,
      shownMovies: props.moviesByGenre.slice(0, SHOWN_MOVIES),
    };

    this._handleSmallMovieCardHover = this._handleSmallMovieCardHover.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {activeGenre, moviesByGenre} = this.props;

    if (prevProps.activeGenre !== activeGenre) {
      this.setState({
        shownMovies: moviesByGenre.slice(0, SHOWN_MOVIES),
      });
    }
  }

  _handleSmallMovieCardHover(movie) {
    this.setState({
      currentMovie: movie,
    });
  }

  _handleShowMoreButtonClick() {
    this.setState((prevState) => ({
      shownMovies: [
        ...prevState.shownMovies,
        ...this.props.moviesByGenre.slice(
            prevState.shownMovies.length,
            prevState.shownMovies.length + SHOWN_MOVIES
        )
      ]
    }));
  }

  render() {
    const {moviesByGenre, onSmallMovieCardClick} = this.props;
    const {shownMovies} = this.state;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {shownMovies.map((movie) => {
            return (
              <SmallMovieCard
                key={movie.id}
                movie={movie}
                onSmallMovieCardClick={onSmallMovieCardClick}
                onSmallMovieCardHover={this._handleSmallMovieCardHover}
              />
            );
          })}
        </div>
        {moviesByGenre.length > shownMovies.length && <ShowMoreButton
          onShowMoreButtonClick={this._handleShowMoreButtonClick}
        />}
      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  moviesByGenre: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesByGenre: state.moviesByGenre,
  activeGenre: state.activeGenre,
});

export default connect(mapStateToProps)(MoviesList);
