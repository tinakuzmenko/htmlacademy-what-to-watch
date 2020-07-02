import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviews from './movie-reviews.jsx';
import {reviews} from '../../utils/test-data.js';

describe(`MovieReviews`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieReviews
        movieReviews={reviews}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
