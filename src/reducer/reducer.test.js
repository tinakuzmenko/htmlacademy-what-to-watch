import {initialState, reducer, ActionType} from './reducer.js';
import {filterMoviesByGenre} from '../helpers/utils.js';
import {movies} from '../helpers/test-data.js';

describe(`Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return all films when 'All genres' chosen`, () => {
    expect(reducer({
      activeGenre: `All genres`,
      moviesByGenre: movies,
    }, {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filterMoviesByGenre(movies, `All genres`),
    })).toEqual({
      activeGenre: `All genres`,
      moviesByGenre: movies,
    });
  });

  it(`Reducer should return right films when genre is chosen`, () => {
    expect(reducer({
      activeGenre: `Drama`,
      moviesByGenre: movies,
    }, {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filterMoviesByGenre(movies, `Drama`),
    })).toEqual({
      activeGenre: `Drama`,
      moviesByGenre: [{
        title: `Aviator`,
        genre: `Drama`,
        date: `2004`,
        background: `https://placeimg.com/1300/512/nature`,
        poster: `img/aviator.jpg`,
        id: 167456,
        description: [`A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`],
        rating: `7,5`,
        ratingDescription: `Normal`,
        votes: 1650,
        director: `Martin Scorsese`,
        starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
        preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
        runTime: `2h 50m`
      }],
    });
  });

  it(`Reducer should return right active genre`, () => {
    expect(reducer({
      activeGenre: `All genres`
    }, {
      type: ActionType.GET_ACTIVE_GENRE,
      payload: `Drama`,
    })).toEqual({
      activeGenre: `Drama`,
    });
  });
});
