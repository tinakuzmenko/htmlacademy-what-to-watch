import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Movie, MOVIES_TITLES} from './mocks/mocks.js';

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      movieTitle={Movie.TITLE}
      movieGenre={Movie.GENRE}
      movieDate={Movie.DATE}
      moviesTitles={MOVIES_TITLES} />,
    root
);
