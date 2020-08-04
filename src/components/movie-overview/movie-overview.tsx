import * as React from 'react';
import {getRatingLevel, getRatingFormat} from '../../helpers/utils';
import {MovieInterface} from '../../types';

interface MovieOverviewProps {
  movie: MovieInterface;
}

const MovieOverview: React.FC<MovieOverviewProps> = ({
  movie
}: MovieOverviewProps) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{getRatingFormat(movie.rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(movie.rating)}</span>
          <span className="movie-rating__count">{movie.votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

export default MovieOverview;
