import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {App} from './components/app/app.jsx';
import {reducer} from "./reducer/reducer.js";
import {movieCard, movies} from './mocks/movies.js';
import {allMoviesReviews} from './mocks/reviews.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const root = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App
        movieCard={movieCard}
        movies={movies}
        moviesReviews={allMoviesReviews} />
    </Provider>,
    root
);
