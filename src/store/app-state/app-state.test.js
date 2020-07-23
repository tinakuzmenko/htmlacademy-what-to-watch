import {initialState, ActionType, reducer} from './app-state';
import {movie} from '../../helpers/test-data';

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

  it(`Should return new current page and new current movie`, () => {
    expect(reducer({
      currentMovie: movie,
      currentPage: `main`,
    }, {
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: {
        currentMovie: movie,
        currentPage: `movie`
      },
    })).toEqual({
      currentMovie: movie,
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
