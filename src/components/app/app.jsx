import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {connect} from "react-redux";
import {Redirect, Route, Router, Switch} from 'react-router-dom';

import {getIsLoadError} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {Operations as UserOperation} from '../../store/user/user';

import {AppRoute, AuthorizationStatus} from '../../helpers/constants';

import AddReview from '../add-review/add-review';
import ErrorScreen from '../error-screen/error-screen';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePlayer from '../movie-player/movie-player';
import SignIn from '../sign-in/sign-in';
import withReview from '../../hocs/with-review/with-review';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';
import {getCurrentMovie} from '../../store/app-state/selectors.js';

const MoviePlayerWrapped = withVideoControls(MoviePlayer);
const AddReviewWrapped = withReview(AddReview);

const App = ({authorizationStatus, login, isLoadError}) => {

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact path={AppRoute.MAIN}
          render={() => {
            return !isLoadError ? <Main /> : <ErrorScreen />;
          }}
        />
        <Route
          exact path={AppRoute.SIGN_IN}
          render={(routeProps) => {
            return authorizationStatus !== AuthorizationStatus.AUTH ?
              <SignIn
                onFormSubmit={login}
                routeProps={routeProps}
              /> :
              <Redirect
                to={AppRoute.MAIN}
              />;
          }}
        />
        <Route
          path={`${AppRoute.MOVIE}/:id`}
          render={(routeProps) => {
            console.log(routeProps);
            return <MoviePage
              routeProps={routeProps}
            />;
          }}
        />
        {/* <Route
          exact path={`${AppRoute.PLAYER}/:id`}
          render={() => <MoviePlayerWrapped />}
        />
        <Route
          exact path={`${AppRoute.MOVIE}/:id/review`}
          render={() => {
            return authorizationStatus !== AuthorizationStatus.AUTH ?
              <AddReviewWrapped /> :
              <Redirect to={AppRoute.SIGN_IN}>
                <SignIn
                  onFormSubmit={login}
                />
              </Redirect>;
          }}
        />
        <Route
          render={() => <ErrorScreen />}
        /> */}
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isLoadError: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoadError: getIsLoadError(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
