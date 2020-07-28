import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {Review} from '../../helpers/constants';
import {connect} from 'react-redux';
import {Operations as DataOperations, ActionCreator} from '../../store/data/data.js';
import {getCurrentMovie} from '../../store/app-state/selectors.js';
import {getIsReviewSending, getIsSendingError} from '../../store/data/selectors';

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
        isSubmitDisabled: true,
      };

      this._handleFormChange = this._handleFormChange.bind(this);
      this._handleSubmitClick = this._handleSubmitClick.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleFormChange() {
      const {clearSendingError} = this.props;
      clearSendingError();
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleReviewChange(evt) {
      const {isReviewSending} = this.props;

      this.setState({
        comment: evt.target.value,
        isSubmitDisabled: evt.target.value.length < Review.MIN_LENGTH || isReviewSending,
      });
    }

    _handleSubmitClick(evt) {
      const {currentMovie, onReviewSubmit} = this.props;
      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      evt.preventDefault();
      onReviewSubmit(currentMovie.id, review);
    }

    render() {
      const {currentMovie} = this.props;

      return (
        <Component
          {...this.props}
          currentMovie={currentMovie}
          onFormChange={this._handleFormChange}
          onSubmitClick={this._handleSubmitClick}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          isSubmitDisabled={this.state.isSubmitDisabled}
        />
      );
    }
  }

  WithReview.propTypes = {
    currentMovie: CustomPropTypes.MOVIE,
    isReviewSending: PropTypes.bool.isRequired,
    isSendingError: PropTypes.bool.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
    clearSendingError: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    currentMovie: getCurrentMovie(state),
    isReviewSending: getIsReviewSending(state),
    isSendingError: getIsSendingError(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewSubmit(movieId, review) {
      dispatch(DataOperations.sendReview(movieId, review));
    },

    clearSendingError() {
      dispatch(ActionCreator.clearSendingError());
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReview);
};

export default withReview;
