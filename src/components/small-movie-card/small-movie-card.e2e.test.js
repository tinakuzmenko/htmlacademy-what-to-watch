import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SmallMovieCard} from './small-movie-card';
import {movie} from '../../helpers/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard e2e tests`, () => {
  it(`SmallMovieCard be hovered`, () => {
    const onSmallMovieCardMouseEnter = jest.fn();

    const mainComponent = shallow(
        <SmallMovieCard
          movie={movie}
          isPlaying={false}
          onSmallMovieCardClick={() => {}}
          onSmallMovieCardMouseEnter={onSmallMovieCardMouseEnter}
          onSmallMovieCardMouseOut={() => {}} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`);

    movieCard.simulate(`mouseenter`, movie);
    expect(onSmallMovieCardMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`SmallMovieCard be clicked`, () => {
    const onSmallMovieCardClick = jest.fn();

    const mainComponent = shallow(
        <SmallMovieCard
          movie={movie}
          isPlaying={true}
          onSmallMovieCardClick={onSmallMovieCardClick}
          onSmallMovieCardMouseEnter={() => {}}
          onSmallMovieCardMouseOut={() => {}} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`);
    const movieTitle = movieCard.find(`.small-movie-card__title`);
    const movieImage = movieCard.find(`.small-movie-card__image`);

    movieTitle.simulate(`click`, {
      preventDefault: onSmallMovieCardClick,
    });

    movieImage.simulate(`click`, {
      preventDefault: onSmallMovieCardClick,
    });

    expect(onSmallMovieCardClick).toHaveBeenCalledTimes(4);
  });
});
