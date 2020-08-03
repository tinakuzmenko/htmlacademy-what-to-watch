import * as React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';
import {movie} from '../../helpers/test-data';
import {Router} from 'react-router-dom';
import history from '../../history';

describe(`SmallMovieCard`, () => {
  it(`Should render correctly movie card`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <SmallMovieCard
              movie={movie}
              isPlaying={true}
              onSmallMovieCardMouseEnter={() => {}}
              onSmallMovieCardMouseOut={() => {}} />
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
