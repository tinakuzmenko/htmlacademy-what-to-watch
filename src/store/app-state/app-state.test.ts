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
});
