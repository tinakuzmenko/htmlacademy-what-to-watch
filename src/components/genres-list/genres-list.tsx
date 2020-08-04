import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/app-state/app-state';
import {getMoviesGenres} from '../../store/data/selectors';
import {getActiveGenre} from '../../store/app-state/selectors';

interface GenresListProps {
  moviesGenres: Array<string>;
  currentActiveGenre: string;
  onGenreClick(genre: string): void;
}

const GenresList: React.FC<GenresListProps> = ({
  moviesGenres,
  currentActiveGenre,
  onGenreClick
}: GenresListProps) => {
  return (
    <ul className="catalog__genres-list">
      {moviesGenres.map((genre, index) => {
        return (<li
          key={`${genre}-${index}`}
          className={`catalog__genres-item ${genre === currentActiveGenre ? `catalog__genres-item--active` : ``}`}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre);
            }}>{genre}</a>
        </li>);
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  moviesGenres: getMoviesGenres(state),
  currentActiveGenre: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
