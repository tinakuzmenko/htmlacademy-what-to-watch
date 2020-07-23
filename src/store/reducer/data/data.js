import {extend} from '../../../helpers/utils';

const initialState = {
  movieCard: {},
  movies: [],
  moviesReviews: [],
};

const ActionType = {
  LOAD_MOVIE_CARD: `LOAD_MOVIE_CARD`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIES_REVIEWS: `LOAD_MOVIES_REVIEWS`
};

const ActionCreator = {
  loadMovieCard: (movieCard) => {
    return {
      type: ActionType.LOAD_MOVIE_CARD,
      payload: movieCard,
    };
  },

  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadMoviesReviews: (moviesReviews) => {
    return {
      type: ActionType.LOAD_MOVIES_REVIEWS,
      payload: moviesReviews,
    };
  },
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIE_CARD:
      return extend(state, {
        movieCard: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_MOVIES_REVIEWS:
      return extend(state, {
        moviesReviews: action.payload,
      });
  }

  return state;
};


export {data, ActionType, ActionCreator};
