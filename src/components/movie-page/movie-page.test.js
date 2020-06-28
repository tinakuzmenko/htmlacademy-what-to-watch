import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movie = {
  title: `Snatch`,
  genre: `Crime`,
  date: `2000`,
  background: `https://placeimg.com/1300/512/nature`,
  poster: `img/snatch.jpg`,
  id: 123890,
  description: [`Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`],
  rating: `8,3`,
  ratingDescription: `Good`,
  votes: 1500,
  director: `Guy Ritchie`,
  starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
};

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MoviePage
        movieCard={movie} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
