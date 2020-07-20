import {initialState, reducer, ActionType} from './reducer';
import {movie} from '../helpers/test-data';

describe(`Reducer`, () => {
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
        movie,
        page: `movie`
      },
    })).toEqual({
      currentMovie: movie,
      currentPage: `movie`,
    });
  });
});
