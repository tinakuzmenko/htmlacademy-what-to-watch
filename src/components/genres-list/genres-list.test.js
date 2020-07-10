import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';
import {genres} from '../../helpers/test-data.js';


describe(`MovieDetails`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<GenresList
        genres={genres}
        currentActiveGenre={`All genres`}
        onGenreClick={() => {}}
        onGenreFilterChange={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
