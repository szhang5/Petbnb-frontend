import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

import AppHeader from "./containers/appheader";
import Hello from "./containers/hello";
import SignIn from "./containers/signin";
import Register from "./containers/register";
import reducers from "./redux/reducers";
import configureStore from "./app/store/configure-store";
import ExclusiveRouteContainer from "./app/ExclusiveRouteContainer";
import theme from "./app/petbnbTheme";

const initialState = window.__INITIAL_STATE__;
const store = configureStore(reducers, initialState);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <CssBaseline />
          <AppHeader />
          <Switch>
              <Route path="/register" component={Register} />
            <ExclusiveRouteContainer>
              <Route path="/signin" component={SignIn} />
              <Route exact path="/" component={Hello} />
            </ExclusiveRouteContainer>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
