import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './components/app/app';
import reducer from "./store/reducer";
import {createAPI} from './api';
import {Operations as DataOperations} from "./store/data/data";

const root = document.querySelector(`#root`);
const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperations.loadMovieCard());
store.dispatch(DataOperations.loadMovies());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
);

