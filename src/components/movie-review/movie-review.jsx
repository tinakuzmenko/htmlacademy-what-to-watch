import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const MovieReview = ({movieReview}) => {
  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{movieReview.content}</p>

          <footer className="review__details">
            <cite className="review__author">{movieReview.author}</cite>
            <time className="review__date" dateTime={movieReview.date}>{moment(movieReview.date).format(`MMMM D, YYYY`)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{movieReview.rating}</div>
      </div>
    </React.Fragment>
  );
};

MovieReview.propTypes = {
  movieReview: PropTypes.shape({
    author: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieReview;
