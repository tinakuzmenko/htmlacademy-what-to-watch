import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviesLikeThis, {getFilteredMovies} from './movies-like-this.jsx';
import {movie, movies, currentMovie} from '../../helpers/test-data.js';

const mockStore = configureStore([]);

describe(`MoviesLikeThis`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      moviesByGenre: movies,
      activeGenre: `All genres`,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviesLikeThis
              movieCard={movie}
              movies={movies}
              onSmallMovieCardClick={() => {}} />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe(`Function getFilteredMovies`, () => {
  it(`Should return movies array with similar genre`, () => {
    expect(getFilteredMovies(movies, currentMovie)).toEqual([{
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
      runTime: `2h 50m`,
    }]);
  });

  it(`Should return empty array when no similar movies`, () => {
    expect(getFilteredMovies(movies, movie)).toEqual([]);
  });
});
