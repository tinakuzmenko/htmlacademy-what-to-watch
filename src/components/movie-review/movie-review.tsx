import * as React from 'react';
import * as moment from 'moment';
import {getRatingFormat} from '../../helpers/utils';
import {ReviewInterface} from '../../types';

interface MovieReviewProps {
  movieReview: ReviewInterface;
}

const MovieReview: React.FC<MovieReviewProps> = ({
  movieReview
}: MovieReviewProps) => {
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

export default MovieReview;
