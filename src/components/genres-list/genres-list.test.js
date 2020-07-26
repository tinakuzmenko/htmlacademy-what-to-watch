import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {genres} from '../../helpers/test-data';

describe(`GenresList`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <GenresList
            moviesGenres={genres}
            currentActiveGenre={`All genres`}
            onGenreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
