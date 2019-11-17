import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import history from "Modules/History";
import { routerMiddleware } from "react-router-redux";
import reduxStore from "Store/index";
import App from "App";

import "Assets/styles/base.scss";
import "Assets/styles/style.scss";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reduxStore,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
  )
);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
