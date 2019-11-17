import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from 'Store/Reducers';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import App from 'App';

import 'Assets/styles/style.scss';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
