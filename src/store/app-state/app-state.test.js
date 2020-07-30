import {initialState, ActionType, ActionCreator, reducer} from './app-state';
import {movie, currentMovie} from '../../helpers/test-data';

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

  it(`Should return new current page when Movie page`, () => {
    expect(reducer({
      currentPage: `main`,
    }, {
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: `movie`,
    })).toEqual({
      currentPage: `movie`,
    });
  });

  it(`Should return new current page when Sign In Page`, () => {
    expect(reducer({
      currentPage: `main`,
    }, {
      type: ActionType.GO_TO_SIGN_IN_PAGE,
      payload: `sign in`,
    })).toEqual({
      currentPage: `sign in`,
    });
  });

  it(`Should return new current page when Main Page`, () => {
    expect(reducer({
      currentPage: `sign in`,
    }, {
      type: ActionType.GO_TO_MAIN_PAGE,
      payload: `main`,
    })).toEqual({
      currentPage: `main`,
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

describe(`Action creators work correctly`, () => {
  it(`Action creator setCurrentGenre returns correct action`, () => {
    expect(ActionCreator.setActiveGenre(`Drama`)).toEqual({
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator setCurrentMovie returns correct action`, () => {
    expect(ActionCreator.setCurrentMovie(movie)).toEqual({
      type: ActionType.SET_CURRENT_MOVIE,
      payload: movie,
    });
  });

  it(`Action creator goToMoviePage returns correct action`, () => {
    expect(ActionCreator.goToMoviePage()).toEqual({
      type: ActionType.GO_TO_MOVIE_PAGE,
      payload: `movie`,
    });
  });

  it(`Action creator watchMovie returns correct action`, () => {
    expect(ActionCreator.watchMovie()).toEqual({
      type: ActionType.WATCH_MOVIE,
      payload: true,
    });
  });

  it(`Action creator stopWatchingMovie returns correct action`, () => {
    expect(ActionCreator.stopWatchingMovie()).toEqual({
      type: ActionType.STOP_WATCHING_MOVIE,
      payload: false,
    });
  });
});
