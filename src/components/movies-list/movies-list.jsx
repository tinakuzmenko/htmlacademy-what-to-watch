import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withActiveVideo from '../../hocs/with-active-video/with-active-video';

const SmallMovieCardWrapped = withActiveVideo(SmallMovieCard);

const MoviesList = ({movies, render}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <SmallMovieCardWrapped
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </div>
      {render()}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CustomPropTypes.MOVIE).isRequired,
  render: PropTypes.func.isRequired,
};

export default MoviesList;
