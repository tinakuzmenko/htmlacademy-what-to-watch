import * as React from 'react';
import {AuthorizationStatus, AppRoute} from '../../helpers/constants';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import history from '../../history';
import {Operations as DataOperations} from '../../store/data/data';
import {MovieInterface} from '../../types';

interface MyListButton {
  authorizationStatus: string;
  movie: MovieInterface;
  changeIsMovieFavorite(movieId: number, isFavorite: boolean): void;
}

const MyListButton: React.FC<MyListButton> = ({
  authorizationStatus,
  movie,
  changeIsMovieFavorite
}: MyListButton) => {
  const handleMovieListButtonClick = (isFavorite) => {
    return authorizationStatus === AuthorizationStatus.AUTH
      ? changeIsMovieFavorite(movie.id, isFavorite)
      : history.push(AppRoute.SIGN_IN);
  };

  const addToMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleMovieListButtonClick(true)}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  const removeFromMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleMovieListButtonClick(false)}
    >
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  return (
    <React.Fragment>
      {!movie.isFavorite ? addToMyList : removeFromMyList}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeIsMovieFavorite(movieId, isFavorite) {
    dispatch(DataOperations.changeIsMovieFavorite(movieId, isFavorite));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
