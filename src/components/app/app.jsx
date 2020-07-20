import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {Pages} from '../../helpers/constants';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePlayer from '../movie-player/movie-player';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';

const MoviePlayerWrapped = withVideoControls(MoviePlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentPage, isMoviePlayerActive} = this.props;

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
  isMoviePlayerActive: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  isMoviePlayerActive: state.isMoviePlayerActive,
});

export {App};
export default connect(mapStateToProps)(App);
