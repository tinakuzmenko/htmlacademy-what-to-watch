import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';
import {movie} from '../../helpers/test-data.js';

describe(`SmallMovieCard`, () => {
  it(`Should render correctly movie card`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        movie={movie}
        onSmallMovieCardClick={() => {}}
        onSmallMovieCardHover={() => {}} />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
