import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import reducer from './store/reducer';
import {createAPI} from './api';
import {Operations as DataOperations} from './store/data/data';
import {Operations as UserOperation, ActionCreator} from './store/user/user';
import {AuthorizationStatus} from './helpers/constants';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
};

const root = document.querySelector(`#root`);
const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperations.loadMovieCard());
store.dispatch(DataOperations.loadMovies());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
);

