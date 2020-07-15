import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types.js';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const SmallMovieCardWrapped = withVideoPlayer(SmallMovieCard);

const MoviesList = ({movies, shownMovies, onShowMoreButtonClick}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {shownMovies.map((movie) => {
          return (
            <SmallMovieCardWrapped
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </div>
      {movies.length > shownMovies.length && <ShowMoreButton
        onShowMoreButtonClick={onShowMoreButtonClick}
      />}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  shownMovies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

export default MoviesList;
