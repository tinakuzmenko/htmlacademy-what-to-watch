import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {connect} from "react-redux";
import {Redirect, Route, Router, Switch} from 'react-router-dom';

import {Operations as DataOperations} from '../../store/data/data';
import {getIsLoadError, getIsLoading} from '../../store/data/selectors';
import {getAuthorizationStatus, getAuthorizationProgress} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus, ALL_GENRES} from '../../helpers/constants';

import AddReview from '../add-review/add-review';
import ErrorScreen from '../error-screen/error-screen';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePlayer from '../movie-player/movie-player';
import SignIn from '../sign-in/sign-in';
import withReview from '../../hocs/with-review/with-review';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route';
import Loader from '../loader/loader';
import {ActionCreator} from '../../store/app-state/app-state.js';

const MoviePlayerWrapped = withVideoControls(MoviePlayer);
const AddReviewWrapped = withReview(AddReview);

const App = ({isLoadError, isAutorizationProgress, isLoading, authorizationStatus, setActiveGenre, loadMovies}) => {

  const renderMainPage = () => {
    setActiveGenre(ALL_GENRES);
    return !isLoadError ? <Main /> : <ErrorScreen />;
  };

  return (
    <React.Fragment>
      {!isLoading && !isAutorizationProgress ?
        <Router history={history}>
          <Switch>
            <Route
              exact path={AppRoute.MAIN}
              render={renderMainPage}
            />
            <Route
              exact path={AppRoute.SIGN_IN}
              render={() => {
                return authorizationStatus !== AuthorizationStatus.AUTH ?
                  <SignIn /> :
                  <Redirect
                    to={AppRoute.MAIN}
                  />;
              }}
            />
            <Route
              exact path={`${AppRoute.MOVIE}/:id`}
              render={(routeProps) => {
                return <MoviePage
                  routeProps={routeProps}
                />;
              }}
            />
            <Route
              exact path={`${AppRoute.PLAYER}/:id`}
              render={(routeProps) => {
                return <MoviePlayerWrapped
                  routeProps={routeProps}
                />;
              }}
            />

            <PrivateRoute
              exact path={`${AppRoute.MOVIE}/:id/review`}
              render={(routeProps) => {
                return <AddReviewWrapped
                  routeProps={routeProps}
                />;
              }}
            />
            <PrivateRoute
              exact path={AppRoute.MY_LIST}
              render={(routeProps) => {
                loadMovies();
                return <MyList
                  routeProps={routeProps}
                />;
              }}
            />
            <Route component={ErrorScreen}
            />
          </Switch>
        </Router>
        : <Loader />}
    </React.Fragment>
  );
};

App.propTypes = {
  isLoadError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAutorizationProgress: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  setActiveGenre: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoadError: getIsLoadError(state),
  isLoading: getIsLoading(state),
  isAutorizationProgress: getAuthorizationProgress(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveGenre(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },

  loadMovies() {
    dispatch(DataOperations.loadFavoriteMovies());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
