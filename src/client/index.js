import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./containers/navbar";
import AppHeader from "./containers/appheader";
import SayHello from "./containers/say-hello";
import SayHelloAgain from "./containers/say-hello-again";
import Hello from "./containers/hello";
import SignIn from "./containers/signin";
import reducers from "./redux/reducers";
import configureStore from "./app/store/configure-store";
import Button from "@material-ui/core/Button";

const initialState = window.__INITIAL_STATE__;
const store = configureStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#fa9797",
          height: "100vh"
        }}
      >
        <AppHeader />

        <Switch>
          <Route path="/" component={Hello} />
          <Route path="/sayhello" component={SayHello} />
          <Route path="/sayhelloagain" component={SayHelloAgain} />
        </Switch>
        <SignIn />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
