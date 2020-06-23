import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e tests`, () => {
  it(`Should title be clicked`, () => {
    const titleClickHandler = jest.fn();

    const mainComponent = mount(
        <Main
          movieCard={movieCard}
          movies={movies}
          onTitleClick={titleClickHandler} />
    );

    const movieTitles = mainComponent.find(`.small-movie-card__title`);

    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

    expect(titleClickHandler.mock.calls.length).toBe(movies.length);
  });
});
