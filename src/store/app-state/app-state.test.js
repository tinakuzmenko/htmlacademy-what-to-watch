import {initialState, ActionType, reducer} from './app-state';
import {movie, currentMovie} from '../../helpers/test-data';
import NameSpace from '../name-space';

describe(`App State Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Should return right genre when it was changed`, () => {
    expect(reducer({
      activeGenre: `All genres`,
    }, {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `Drama`,
    })).toEqual({
      activeGenre: `Drama`,
    });
  });

  it(`Should return new current movie`, () => {
    expect(reducer({
      currentMovie: movie,
    }, {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: currentMovie,
    })).toEqual({
      currentMovie,
    });
  });

  it(`Should return new current page`, () => {
    expect(reducer({
      currentPage: `main`,
    }, {
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: `movie`,
    })).toEqual({
      currentPage: `movie`,
    });
  });

  it(`Should return true in store when MoviePlayer is active`, () => {
    expect(reducer({
      isMoviePlayerActive: false,
    }, {
      type: ActionType.WATCH_MOVIE,
      payload: true,
    })).toEqual({
      isMoviePlayerActive: true
    });
  });

  it(`Should return false in store when MoviePlayer is not active`, () => {
    expect(reducer({
      isMoviePlayerActive: true,
    }, {
      type: ActionType.STOP_WATCHING_MOVIE,
      payload: false,
    })).toEqual({
      isMoviePlayerActive: false
    });
  });
});
