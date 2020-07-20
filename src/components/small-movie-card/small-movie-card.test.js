import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './small-movie-card';
import {movie} from '../../helpers/test-data';

describe(`SmallMovieCard`, () => {
  it(`Should render correctly movie card`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        movie={movie}
        isPlaying={true}
        onSmallMovieCardClick={() => {}}
        onSmallMovieCardMouseEnter={() => {}}
        onSmallMovieCardMouseOut={() => {}} />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
