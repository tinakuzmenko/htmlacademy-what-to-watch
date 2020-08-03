import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import SmallMovieCard from './small-movie-card';
import {movie} from '../../helpers/test-data';

configure({
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
