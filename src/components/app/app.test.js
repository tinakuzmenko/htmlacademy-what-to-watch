import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movies = [`The Shawshank Redemption`, `The Godfather`, `The Dark Knight`, `12 Angry Men`, `Schindler's List`, `The Lord of the Rings: The Return of the King`, `The Good, the Bad and the Ugly`, `Fight Club`, `Shutter Island`, ` Inception`];

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<App
        movieTitle={`The Dark Knight`}
        movieGenre={`Action`}
        movieDate={`2009`}
        moviesTitles={movies}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
