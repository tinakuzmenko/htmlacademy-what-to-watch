import * as React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withActiveVideo from '../../hocs/with-active-video/with-active-video';
import {MovieInterface} from '../../types';

interface MoviesListProps {
  movies: Array<MovieInterface>;
  render?: () => JSX.Element;
}

const SmallMovieCardWrapped = withActiveVideo(SmallMovieCard);

const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  render
}: MoviesListProps) => {
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
      {render && render()}
    </React.Fragment>
  );
};

export default MoviesList;
