import {extend} from '../../helpers/utils';
import {createMovie} from '../../adapters/adapters';
import {emptyMovie} from '../../helpers/constants';
import {ActionCreator as AppStateActionCreator} from '../app-state/app-state';

const initialState = {
  movieCard: emptyMovie,
  movies: [],
  movieReviews: [],
  isLoadError: false,
  isReviewSending: false,
  isSendingSuccessfull: false,
  isSendingError: false,
};

const ActionType = {
  LOAD_MOVIE_CARD: `LOAD_MOVIE_CARD`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`,
  CATCH_LOAD_ERROR: `CATCH_LOAD_ERROR`,
  CHECK_IS_REVIEW_SENDING: `CHECK_IS_REVIEW_SENDING`,
  CHECK_IS_SENDING_SUCCESSFULL: `CHECK_IS_REVIEW_SENDING_SUCCESSFULL`,
  CHECK_IS_SENDING_ERROR: `CHECK_IS_REVIEW_SENDING_ERROR`,
  CLEAR_SENDING_ERROR: `CLEAR_SENDING_ERROR`,
};

const ActionCreator = {
  loadMovieCard: (movieCard) => {
    return {
      type: ActionType.LOAD_MOVIE_CARD,
      payload: movieCard
    };
  },

  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadMovieReviews: (movieReviews) => {
    return {
      type: ActionType.LOAD_MOVIE_REVIEWS,
      payload: movieReviews,
    };
  },

  catchLoadError: () => {
    return {
      type: ActionType.CATCH_LOAD_ERROR,
      payload: true,
    };
  },

  checkIsReviewSending: (isReviewSending) => ({
    type: ActionType.CHECK_IS_REVIEW_SENDING,
    payload: isReviewSending,
  }),

  checkIsSendingSuccessfull: (isSendingSuccessfull) => ({
    type: ActionType.CHECK_IS_SENDING_SUCCESSFULL,
    payload: isSendingSuccessfull,
  }),

  checkIsSendingError: (isSendingError) => ({
    type: ActionType.CHECK_IS_SENDING_ERROR,
    payload: isSendingError,
  }),

  clearSendingError: () => ({
    type: ActionType.CLEAR_SENDING_ERROR,
    payload: false,
  }),
};

const Operations = {
  loadMovieCard: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadMovieCard(createMovie(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.catchLoadError());
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => createMovie(movie));
        dispatch(ActionCreator.loadMovies(movies));
      })
      .catch(() => {
        dispatch(ActionCreator.catchLoadError());
      });
  },

  loadMovieReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadMovieReviews(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.catchLoadError());
      });
  },

  sendReview: (movieId, review) => (dispatch, getState, api) => {
    dispatch(ActionCreator.checkIsReviewSending(true));
    return api.post(`/comments/${movieId}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(ActionCreator.checkIsReviewSending(false));
      dispatch(ActionCreator.checkIsSendingSuccessfull(true));
      dispatch(ActionCreator.checkIsSendingError(false));
    })
    .then(() => {
      dispatch(Operations.loadMovieReviews(movieId));
      dispatch(AppStateActionCreator.goToMoviePage());
    })
    .catch(() => {
      dispatch(ActionCreator.checkIsReviewSending(false));
      dispatch(ActionCreator.checkIsSendingSuccessfull(false));
      dispatch(ActionCreator.checkIsSendingError(true));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIE_CARD:
      return extend(state, {
        movieCard: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_MOVIE_REVIEWS:
      return extend(state, {
        movieReviews: action.payload,
      });
    case ActionType.CATCH_LOAD_ERROR:
      return extend(state, {
        isLoadError: action.payload,
      });
    case ActionType.CHECK_IS_REVIEW_SENDING:
      return extend(state, {
        isReviewSending: action.payload,
      });
    case ActionType.CHECK_IS_SENDING_SUCCESSFULL:
      return extend(state, {
        isSendingSuccessfull: action.payload,
      });
    case ActionType.CHECK_IS_SENDING_ERROR:
      return extend(state, {
        isSendingError: action.payload,
      });
    case ActionType.CLEAR_SENDING_ERROR:
      return extend(state, {
        isSendingError: action.payload,
      });
  }

  return state;
};

export {ActionType, ActionCreator, Operations, reducer, initialState};
