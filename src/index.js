import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import storeApp from "./reducers";
/*eslint no-unused-vars:0*/
import { Redirect, Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import * as serviceWorker from "./serviceWorker";
import ApplicationContainer from "./containers/ApplicationContainer";
import axios from "axios";

const history = createHistory();
const middleware = [thunkMiddleware];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
const store = createStore(storeApp, enhancer);

/*asyncFunc().then(data => {
  var newdata = data.data;
  });

console.log(newdata);
//console.log(newdata); */

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Component} />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

render(ApplicationContainer);

store.subscribe(() => console.log(store.getState()));

serviceWorker.unregister();
