import {movieCard, movies} from '../../mocks/movies';
import {allMoviesReviews} from '../../mocks/reviews';
import {extend} from '../../helpers/utils';
import {ActionType} from '../action-creator/action-creator';
import {Pages, ALL_GENRES} from '../../helpers/constants';

const initialState = {
  movieCard,
  movies,
  moviesReviews: allMoviesReviews,
  activeGenre: ALL_GENRES,
  currentPage: Pages.MAIN,
  currentMovie: movieCard,
  isMoviePlayerActive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GO_TO_MOVIE_PAGE:
      return extend(state, {
        currentMovie: action.payload.movie,
        currentPage: action.payload.page,
      });
    case ActionType.WATCH_MOVIE:
      return extend(state, {
        isMoviePlayerActive: action.payload,
      });
    case ActionType.STOP_WATCHING_MOVIE:
      return extend(state, {
        isMoviePlayerActive: action.payload,
      });
  }

  return state;
};

export {initialState, reducer};
