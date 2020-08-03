import * as React from 'react';
import {sliceReviews} from '../../helpers/utils';
import MovieReview from '../movie-review/movie-review';
import {connect} from 'react-redux';
import {getMovieReviews} from '../../store/data/selectors';
import {ReviewInterface} from '../../types';

interface MovieReviewsProps {
  movieReviews: Array<ReviewInterface>;
}

const MovieReviews: React.FC<MovieReviewsProps> = ({
  movieReviews
}: MovieReviewsProps) => {
  const slicedReviews = sliceReviews(movieReviews);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {slicedReviews.map((slicedReview, index) => {
          return (
            <div key={Math.random() + index} className="movie-card__reviews-col">
              {slicedReview.map((review) => <MovieReview movieReview={review} key={Math.random() + review.id} />)}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  movieReviews: getMovieReviews(state)
});

export default connect(mapStateToProps)(MovieReviews);
