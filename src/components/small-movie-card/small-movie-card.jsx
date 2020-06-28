import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const SmallMovieCard = ({movie, onMovieClick, onCardHover}) => {
  const handleMovieClick = (evt) => {
    evt.preventDefault();
    onMovieClick(movie);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onCardHover();
      }}
    >
      <div
        onClick={handleMovieClick}
        className="small-movie-card__image">
        <VideoPlayer
          isPlaying={false}
          source={movie.preview}
          poster={movie.poster}
        />
      </div>
      <h3
        onClick={handleMovieClick}
        className="small-movie-card__title"
      >
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>);
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rating: PropTypes.string.isRequired,
    ratingDescription: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;
