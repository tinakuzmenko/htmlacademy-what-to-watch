import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SHOWN_MOVIES} from '../../helpers/constants.js';
import Main from './main.jsx';
import {movie, movies, allGenresMovies} from '../../helpers/test-data.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e tests`, () => {
  const movieCard = movie;
  const mockStore = configureStore([]);

  const store = mockStore({
    movieCard,
    movies,
    activeGenre: `All genres`,
    moviesByGenre: movies,
  });

  it(`Should be clicked on title`, () => {
    const handleTitleClick = jest.fn();

    const mainComponent = mount(
        <Provider store={store}>
          <Main
            onSmallMovieCardClick={handleTitleClick} />
        </Provider>
    );

    const movieTitles = mainComponent.find(`.small-movie-card__title`);
    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));
    expect(handleTitleClick.mock.calls.length).toBe((movies.length));
  });

  it(`Should be clicked on image`, () => {
    const handleTitleClick = jest.fn();

    const mainComponent = mount(
        <Provider store={store}>
          <Main
            onSmallMovieCardClick={handleTitleClick} />
        </Provider>
    );

    const movieImages = mainComponent.find(`.small-movie-card__image`);
    movieImages.forEach((movieImage) => movieImage.simulate(`click`));
    expect(handleTitleClick.mock.calls.length).toBe((movies.length));
  });

  it(`Should show movies without Show More button`, () => {
    const shownMovies = allGenresMovies.slice(0, 2);

    const localStore = mockStore({
      movieCard,
      movies: allGenresMovies,
      activeGenre: `All genres`,
      moviesByGenre: shownMovies,
    });

    const mainComponent = mount(
        <Provider store={localStore}>
          <Main
            onSmallMovieCardClick={() => {}} />
        </Provider>
    );

    expect(mainComponent.find(`.catalog__button`).length).toBe(0);
    expect(mainComponent.find(`.small-movie-card`).length).toBe(shownMovies.length);
  });

  it(`Should show movies without Show More button`, () => {
    const shownMovies = allGenresMovies;

    const localStore = mockStore({
      movieCard,
      movies: allGenresMovies,
      activeGenre: `All genres`,
      moviesByGenre: shownMovies,
    });

    const mainComponent = mount(
        <Provider store={localStore}>
          <Main
            onSmallMovieCardClick={() => {}} />
        </Provider>
    );

    const buttonShowMore = mainComponent.find(`.catalog__button`);
    expect(buttonShowMore.length).toBe(1);
    expect(mainComponent.find(`.small-movie-card`).length).toBe(SHOWN_MOVIES);

    buttonShowMore.simulate(`click`);

    expect(mainComponent.find(`.catalog__button`).length).toBe(0);
    expect(mainComponent.find(`.small-movie-card`).length).toBe(allGenresMovies.length);
  });
});
