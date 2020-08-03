import * as React from 'react';
import PageHeader from '../page-header/page-header';
import {TEXTAREA_COLOR, RATINGS_QUANTITY, Review, reviewSubmitButton, Pages, AppRoute} from '../../helpers/constants';
import {Link} from 'react-router-dom';

const AddReview = ({currentMovie, isDataSending, isSendingError, onSubmitClick, onFormChange, onRatingChange, onReviewChange, isSubmitDisabled}) => {
  const isRadioDisabled = Boolean(isDataSending);

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

          <PageHeader
            currentPage={Pages.ADD_REVIEW}
          >
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${AppRoute.MOVIE}/${currentMovie.id}`}
                    className="breadcrumbs__link">{currentMovie.title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </PageHeader>

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
                {Array.from(Array(RATINGS_QUANTITY)).map((_, index) => {
                  const rating = index + 1;
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
                  {isDataSending ? reviewSubmitButton.sending : reviewSubmitButton.post}
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

export default AddReview;
