import React from 'react';
import moment from 'moment';
import {getRatingFormat} from '../../helpers/utils';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const MovieReview = ({movieReview}) => {
  const rating = getRatingFormat(movieReview.rating);
  const date = moment(movieReview.date).format(`MMMM D, YYYY`);
  const dateToISO = moment(movieReview.date).format(`YYYY-MM-DD`);

  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{movieReview.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{movieReview.user.name}</cite>
            <time className="review__date" dateTime={dateToISO}>{date}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    </React.Fragment>
  );
};

MovieReview.propTypes = {
  movieReview: CustomPropTypes.REVIEW,
};

export default MovieReview;
