import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';
import {movie} from '../../helpers/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard e2e tests`, () => {
  it(`SmallMovieCard be hovered`, () => {
    const onSmallMovieCardHover = jest.fn((args) => args);

    const mainComponent = shallow(
        <SmallMovieCard
          movie={movie}
          onSmallMovieCardHover={onSmallMovieCardHover}
          onSmallMovieCardClick={() => {}} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`);

    movieCard.simulate(`mouseenter`, movie);
    expect(onSmallMovieCardHover).toHaveBeenCalledTimes(1);
    expect(onSmallMovieCardHover).toHaveBeenCalledWith(movie);
  });

  it(`SmallMovieCard be clicked`, () => {
    const onMovieClick = jest.fn();

    const mainComponent = shallow(
        <SmallMovieCard
          movie={movie}
          onSmallMovieCardClick={onMovieClick}
          onSmallMovieCardHover={() => {}} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`);
    const movieTitle = movieCard.find(`.small-movie-card__title`);
    const movieImage = movieCard.find(`.small-movie-card__image`);

    movieTitle.simulate(`click`, {
      preventDefault: onMovieClick,
    });

    movieImage.simulate(`click`, {
      preventDefault: onMovieClick,
    });

    expect(onMovieClick).toHaveBeenCalledTimes(4);
  });
});
