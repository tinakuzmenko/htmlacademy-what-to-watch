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
    const onSmallMovieCardMouseEnter = jest.fn();
    const onSmallMovieCardMouseOut = jest.fn();

    const mainComponent = shallow(
        <SmallMovieCard
          movie={movie}
          isPlaying={false}
          onSmallMovieCardMouseEnter={onSmallMovieCardMouseEnter}
          onSmallMovieCardMouseOut={onSmallMovieCardMouseOut} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`);

    movieCard.simulate(`mouseenter`, movie);
    expect(onSmallMovieCardMouseEnter).toHaveBeenCalledTimes(1);
    movieCard.simulate(`mouseout`, movie);
    expect(onSmallMovieCardMouseOut).toHaveBeenCalledTimes(1);
  });
});
