import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
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
  starring: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`]
};


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard e2e tests`, () => {
  it(`SmallMovieCard be hovered`, () => {
    const onCardHover = jest.fn((args) => args);

    const mainComponent = shallow(
        <SmallMovieCard
          movie={movie}
          onMovieClick={() => {}}
          onCardHover={onCardHover} />
    );

    const movieCards = mainComponent.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, movie);
    });

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover.mock.calls[0][0]).toMatchObject(movie);
  });
});
