import * as React from 'react';
import VideoPlayer from '../video-player/video-player';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../helpers/constants';

const SmallMovieCard = ({movie, isPlaying, onSmallMovieCardMouseEnter, onSmallMovieCardMouseOut}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onSmallMovieCardMouseEnter();
      }}
      onMouseOut={() => {
        onSmallMovieCardMouseOut();
      }}
    >
      <Link
        className="small-movie-card__link"
        to={`${AppRoute.MOVIE}/${movie.id}`}>
        <div
          className="small-movie-card__image"
        >
          <VideoPlayer
            muted
            isPlaying={isPlaying}
            source={movie.preview}
            poster={movie.poster}
          />
        </div>
        <h3
          className="small-movie-card__title"
        >
          {movie.title}
        </h3>
      </Link>
    </article>);
};

export default SmallMovieCard;
