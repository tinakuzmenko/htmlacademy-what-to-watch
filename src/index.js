import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
// import thunk from "redux-thunk";
import reducer from "./store/reducer/reducer";
import App from './components/app/app';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    // composeWithDevTools(
    //     // applyMiddleware(thunk.withExtraArgument(api))
    // )
);

const root = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
);
