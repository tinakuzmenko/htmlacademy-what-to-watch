import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {TEXTAREA_COLOR, RATINGS, Review, reviewSubmitButton} from '../../helpers/constants.js';

const AddReview = ({currentMovie, isReviewSending, isSendingError, onSubmitClick, onFormChange, onRatingChange, onReviewChange, isSubmitDisabled}) => {
  const isRadioDisabled = isReviewSending ? true : false;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: currentMovie.backgroundColor}}
      >
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentMovie.background} alt={currentMovie.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentMovie.posterImage} alt={currentMovie.title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={onSubmitClick}
            onChange={onFormChange}
          >
            <div
              className="rating"
            >
              <div
                className="rating__stars"
                onChange={onRatingChange}>
                {RATINGS.map((rating) => {
                  return (
                    <React.Fragment key={rating}>
                      <input
                        className="rating__input"
                        id={`star-${rating}`}
                        type="radio"
                        name="rating"
                        value={rating}
                        disabled={isRadioDisabled}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div
              className="add-review__text"
              style={{backgroundColor: TEXTAREA_COLOR}}>
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={Review.MIN_LENGTH}
                maxLength={Review.MAX_LENGTH}
                onChange={onReviewChange}
                required
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={isSubmitDisabled}
                >
                  {isReviewSending ? reviewSubmitButton.sending : reviewSubmitButton.post}
                </button>
              </div>

            </div>
          </form>
          {isSendingError &&
            <p style={{color: `red`}}>Error while sending data. Please, try again later.</p>
          }
        </div>
      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
  isReviewSending: PropTypes.bool.isRequired,
  isSendingError: PropTypes.bool.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
};

export default AddReview;
