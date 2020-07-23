import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ActionCreator} from '../../store/action-creator/action-creator';
import {connect} from "react-redux";
import {Pages} from '../../helpers/constants';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePlayer from '../movie-player/movie-player';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';
import {CustomPropTypes} from '../../helpers/custom-prop-types';

const MoviePlayerWrapped = withVideoControls(MoviePlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentPage, currentMovie, isMoviePlayerActive, onExitButtonClick} = this.props;

    if (isMoviePlayerActive) {
      return (
        <MoviePlayerWrapped
          currentMovie={currentMovie}
          onExitButtonClick={onExitButtonClick}
        />
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
    const {currentMovie, onExitButtonClick} = this.props;

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
            <MoviePlayerWrapped
              currentMovie={currentMovie}
              onExitButtonClick={onExitButtonClick}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
  currentMovie: CustomPropTypes.MOVIE,
  isMoviePlayerActive: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  currentMovie: state.currentMovie,
  isMoviePlayerActive: state.isMoviePlayerActive,
});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick() {
    dispatch(ActionCreator.stopWatchingMovie());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
