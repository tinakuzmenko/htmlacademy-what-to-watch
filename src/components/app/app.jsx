import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {connect} from "react-redux";
import {Redirect, Route, Router, Switch} from 'react-router-dom';

import {getIsLoadError, getIsLoading} from '../../store/data/selectors';
import {getAuthorizationStatus, getAuthorizationProgress} from '../../store/user/selectors';
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
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route';
import Loader from '../loader/loader';

const MoviePlayerWrapped = withVideoControls(MoviePlayer);
const AddReviewWrapped = withReview(AddReview);

const App = ({authorizationStatus, login, isLoadError, isAutorizationProgress, isLoading}) => {

  const renderMainPage = () => {
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
              exact path={`${AppRoute.MOVIE}/:id`}
              render={(routeProps) => {
                return <MoviePage
                  routeProps={routeProps}
                />;
              }}
            />
            <Route
              exact path={`${AppRoute.PLAYER}/:id`}
              component={MoviePlayerWrapped}
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
  authorizationStatus: PropTypes.string.isRequired,
  isAutorizationProgress: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoadError: getIsLoadError(state),
  isLoading: getIsLoading(state),
  authorizationStatus: getAuthorizationStatus(state),
  isAutorizationProgress: getAuthorizationProgress(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
