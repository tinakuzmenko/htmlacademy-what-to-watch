import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {getMoviesReviews, sliceReviews} from '../../helpers/utils';
import MovieReview from '../movie-review/movie-review';

const MovieReviews = ({movieReviews}) => {
  const [usersReviews] = movieReviews;
  const slicedReviews = sliceReviews(usersReviews.reviews);

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

MovieReviews.propTypes = {
  movieReviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired,
};

const mapStateToProps = (state) => ({
  movieReviews: getMoviesReviews(state.moviesReviews, state.currentMovie),
});

export {MovieReviews};
export default connect(mapStateToProps)(MovieReviews);
