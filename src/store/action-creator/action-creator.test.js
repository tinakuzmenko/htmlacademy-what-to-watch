import {ActionCreator} from './action-creator';
import {movie} from '../../helpers/test-data';

describe(`ActionCreator`, () => {
  it(`Should return right payload when setActiveGenre()`, () => {
    expect(ActionCreator.setActiveGenre(`Drama`)).toEqual({
      type: `SET_ACTIVE_GENRE`,
      payload: `Drama`,
    });
  });

  it(`Should return right payload when goToMoviePage()`, () => {
    expect(ActionCreator.goToMoviePage(movie)).toEqual({
      type: `GO_TO_MOVIE_PAGE`,
      payload: {
        movie,
        page: `movie`
      },
    });
  });

  it(`Should return right payload when watchMovie()`, () => {
    expect(ActionCreator.watchMovie()).toEqual({
      type: `WATCH_MOVIE`,
      payload: true,
    });
  });

  it(`Should return right payload when stopWatchingMovie()`, () => {
    expect(ActionCreator.stopWatchingMovie()).toEqual({
      type: `STOP_WATCHING_MOVIE`,
      payload: false,
    });
  });
});
