import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import {MAX_SHOWN_GENRES} from '../../helpers/constants.js';

const GenresList = ({allMoviesGenres, currentActiveGenre, onGenreClick}) => {
  const shownGenres = allMoviesGenres.slice(0, MAX_SHOWN_GENRES);

  return (
    <ul className="catalog__genres-list">
      {shownGenres.map((genre, index) => {
        return (<li
          key={genre + index}
          className={`catalog__genres-item ${genre === currentActiveGenre ? `catalog__genres-item--active` : ``}`}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre);
            }}>{genre}</a>
        </li>);
      })}
    </ul>
  );
};

GenresList.propTypes = {
  allMoviesGenres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentActiveGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allMoviesGenres: state.allMoviesGenres,
  currentActiveGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.getMoviesByGenre(genre));
    dispatch(ActionCreator.getActiveGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
