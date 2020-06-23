import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movieCard = {
  title: `Johnny English`,
  genre: `Comedy`,
  date: `2003`,
  image: `img/johnny-english.jpg`,
  id: 145231,
};

const movies = [
  {
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    date: `2019`,
    image: `img/bohemian-rhapsody.jpg`,
    id: 324235,
  },
  {
    title: `Aviator`,
    genre: `Drama`,
    date: `2004`,
    image: `img/aviator.jpg`,
    id: 435342,
  },
  {
    title: `Shutter Island`,
    genre: `Thriller`,
    date: `2010`,
    image: `img/shutter-island.jpg`,
    id: 123155,
  },
  {
    title: `Pulp Fiction`,
    genre: `Crime`,
    date: `1994`,
    image: `img/pulp-fiction.jpg`,
    id: 346223,
  }];

describe(`Main`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<Main
        movieCard={movieCard}
        movies={movies}
        onTitleClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
