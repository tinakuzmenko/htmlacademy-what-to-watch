import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const movieCard = {
  title: `No Country for Old Men`,
  genre: `Thriller`,
  date: `2007`,
  background: `https://placeimg.com/1300/512/nature`,
  poster: `img/no-country-for-old-men.jpg`,
  id: 134789,
  description: [`Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`],
  rating: `8,1`,
  ratingDescription: `Good`,
  votes: 870,
  director: `Ethan Coen, Joel Coen`,
  starring: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
};

const movies = [
  {
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
  },
  {
    title: `Johnny English`,
    genre: `Comedy`,
    date: `2003`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `img/johnny-english.jpg`,
    id: 109321,
    description: [`After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English (Rowan Atkinson) is forced to come out of retirement to find the mastermind hacker.`],
    rating: `6,2`,
    ratingDescription: `Normal`,
    votes: 300,
    director: `David Kerr`,
    starring: [`Rowan Atkinson`, `Ben Miller`, `Olga Kurylenko`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  }];


Enzyme.configure({
  adapter: new Adapter(),
});

const mockVideoElement = () => {
  Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
    configurable: true,

    get() {
      setTimeout(() => (this.onloadeddata && this.onloadeddata()));
      return () => {};
    }
  });
};

describe(`Main e2e tests`, () => {
  it(`Should be clicked on title`, () => {
    const titleClickHandler = jest.fn();
    mockVideoElement();

    const mainComponent = mount(
        <Main
          movieCard={movieCard}
          movies={movies}
          onMovieClick={titleClickHandler} />
    );

    const movieTitles = mainComponent.find(`.small-movie-card__title`);

    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

    expect(titleClickHandler.mock.calls.length).toBe((movies.length));
  });

  it(`Should be clicked on image`, () => {
    const titleClickHandler = jest.fn();
    mockVideoElement();

    const mainComponent = mount(
        <Main
          movieCard={movieCard}
          movies={movies}
          onMovieClick={titleClickHandler} />
    );

    const movieImages = mainComponent.find(`.small-movie-card__image`);

    movieImages.forEach((movieImage) => movieImage.simulate(`click`));

    expect(titleClickHandler.mock.calls.length).toBe((movies.length));
  });
});
