import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/app-state/app-state';
import {MAX_SHOWN_GENRES} from '../../helpers/constants';
import {getMoviesGenres} from '../../helpers/utils';
import NameSpace from '../../store/name-space';

const GenresList = ({moviesGenres, currentActiveGenre, onGenreClick}) => {
  return (
    <ul className="catalog__genres-list">
      {moviesGenres.map((genre, index) => {
        return (<li
          key={`${genre}-${index}`}
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
  moviesGenres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentActiveGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesGenres: getMoviesGenres(state[NameSpace.DATA].movies).slice(0, MAX_SHOWN_GENRES),
  currentActiveGenre: state[NameSpace.APP_STATE].activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
