import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {genres, noop} from '../../helpers/test-data';

describe(`GenresList`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <GenresList
            moviesGenres={genres}
            currentActiveGenre={`All genres`}
            onGenreClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
