import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movies = [`The Shawshank Redemption`, `The Godfather`, `The Dark Knight`, `12 Angry Men`, `Schindler's List`, `The Lord of the Rings: The Return of the King`, `The Good, the Bad and the Ugly`, `Fight Club`, `Shutter Island`, ` Inception`];

describe(`Main`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<Main
        movieTitle={`The Dark Knight`}
        movieGenre={`Action`}
        movieDate={`2008`}
        moviesTitles={movies}
        onTitleClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
