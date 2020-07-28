import {extend} from '../../helpers/utils';
import {createMovie} from '../../adapters/adapters';
import {emptyMovie} from '../../helpers/constants';

const initialState = {
  movieCard: emptyMovie,
  movies: [],
  movieReviews: [],
  isError: false,
};

const ActionType = {
  LOAD_MOVIE_CARD: `LOAD_MOVIE_CARD`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`,
  CATCH_ERROR: `CATCH_ERROR`,
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

  catchError: () => {
    return {
      type: ActionType.CATCH_ERROR,
      payload: true,
    };
  }
};

const Operations = {
  loadMovieCard: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadMovieCard(createMovie(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError());
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => createMovie(movie));
        dispatch(ActionCreator.loadMovies(movies));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError());
      });
  },

  loadMovieReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadMovieReviews(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError());
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
    case ActionType.CATCH_ERROR:
      return extend(state, {
        isError: action.payload,
      });
  }

  return state;
};

export {ActionType, ActionCreator, Operations, reducer, initialState};
