import * as React from 'react';
import {getRunTimeFormat} from '../../helpers/utils';
import {MovieInterface} from '../../types';

interface MovieDetailsProps {
  movie: MovieInterface;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  movie
}: MovieDetailsProps) => {
  const getMovieActorsList = (actors) => {
    return actors.map((actor) => {
      return (
        <React.Fragment key={`${actor}-${Math.random()}`}>
          {actor} <br />
        </React.Fragment>
      );
    });
  };

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
            <span className="movie-card__details-value">{getRunTimeFormat(movie.runTime)}</span>
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

export default MovieDetails;
