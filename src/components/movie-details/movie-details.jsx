import React from 'react';
import {CustomPropTypes} from '../../utils/custom-prop-types.js';

const getMovieActorsList = (actors) => {
  return actors.map((actor) => {
    return (
      <React.Fragment key={`${actor}-${Math.random()}`}>
        {actor} <br />
      </React.Fragment>
    );
  });
};

const MovieDetails = ({movie}) => {
  const actors = getMovieActorsList(movie.starring);

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">{actors}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{movie.runTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movie.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.date}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  movie: CustomPropTypes.MOVIE,
};

export default MovieDetails;
