import React from 'react';
import PropTypes from 'prop-types';
import {MAX_SHOWN_GENRES} from '../../helpers/constants.js';

const GenresList = ({genres, currentActiveGenre, onGenreClick}) => {
  const shownGenres = genres.slice(0, MAX_SHOWN_GENRES);

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
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentActiveGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
