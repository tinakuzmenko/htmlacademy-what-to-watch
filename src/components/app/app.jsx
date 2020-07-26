import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {Pages} from '../../helpers/constants';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePlayer from '../movie-player/movie-player';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';
import {getCurrentPage, getIsMoviePlayerActive} from '../../store/app-state/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getIsError} from '../../store/data/selectors';
import ErrorScreen from '../error-screen/error-screen';
import SignIn from '../sign-in/sign-in';
import {Operations as UserOperation} from '../../store/user/user';

const MoviePlayerWrapped = withVideoControls(MoviePlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentPage, isMoviePlayerActive, isError, login} = this.props;

    if (isError) {
      return (
        <ErrorScreen />
      );
    }

    if (isMoviePlayerActive) {
      return (
        <MoviePlayerWrapped />
      );
    }

    switch (currentPage) {
      case Pages.MAIN:
        return (
          <Main />
        );
      case Pages.MOVIE:
        return (
          <MoviePage />
        );
      case Pages.SIGN_IN:
        return (
          <SignIn
            onFormSubmit={login}
          />
        );
      default:
        return (
          <Main />
        );
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage />
          </Route>
          <Route exact path="/dev-watch">
            <MoviePlayerWrapped />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
  isMoviePlayerActive: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: getCurrentPage(state),
  isMoviePlayerActive: getIsMoviePlayerActive(state),
  isError: getIsError(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
