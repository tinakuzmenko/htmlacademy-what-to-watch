import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const titleClickHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {movieTitle, movieGenre, movieDate, moviesTitles} = props;

  return <Main
    movieTitle={movieTitle}
    movieGenre={movieGenre}
    movieDate={movieDate}
    moviesTitles={moviesTitles}
    onTitleClick={titleClickHandler} />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieDate: PropTypes.string.isRequired,
  moviesTitles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default App;
