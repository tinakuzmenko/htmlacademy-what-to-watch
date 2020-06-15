import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const MOVIES_TITLES = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<App
        movieTitle={`The Grand Budapest Hotel`}
        movieGenre={`Drama`}
        movieDate={`2014`}
        moviesTitles={MOVIES_TITLES} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
