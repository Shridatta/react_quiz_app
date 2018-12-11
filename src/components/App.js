import React from "react";
import { Route, Router } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import storeApp from "../reducers";
import createHistory from "history/createBrowserHistory";
import QuizContainer from "../containers/QuizContainer";
import SummaryContainer from "../containers/SummaryContainer";
import IntroContainer from "../containers/IntroContainer";

const history = createHistory();
const middleware = [thunkMiddleware];
let store = createStore(storeApp, applyMiddleware(...middleware));

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <Router history={history}>
            <div className={"appRoutes"}>
              <Route exact path="/" name={"main"} component={IntroContainer} />
              <Route
                exact
                path="/quiz"
                name={"main"}
                component={QuizContainer}
              />
              <Route
                exact
                path="/summary"
                name={"main"}
                component={SummaryContainer}
              />
            </div>
          </Router>
        </Provider>
      </AppContainer>
    );
  }
}
