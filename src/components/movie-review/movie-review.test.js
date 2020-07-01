import React from 'react';
import renderer from 'react-test-renderer';
import MovieReview from './movie-review.jsx';

const review = {
  author: `Amanda Greever`,
  rating: `8,0`,
  date: `November 18, 2015`,
  content: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  id: 4563456345,
};

describe(`MovieReview`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MovieReview
        movieReview={review}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
