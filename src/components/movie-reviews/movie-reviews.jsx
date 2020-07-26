import PropTypes from 'prop-types';
import React from 'react';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {sliceReviews} from '../../helpers/utils';
import MovieReview from '../movie-review/movie-review';
import {connect} from 'react-redux';
import {getMovieReviews} from '../../store/data/selectors';

const MovieReviews = ({movieReviews}) => {
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

MovieReviews.propTypes = {
  movieReviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired
};

const mapStateToProps = (state) => ({
  movieReviews: getMovieReviews(state)
});

export default connect(mapStateToProps)(MovieReviews);
