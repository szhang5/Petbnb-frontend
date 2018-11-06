import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./containers/navbar";
import SayHello from './containers/say-hello';
import SayHelloAgain from './containers/say-hello-again';
import Hello from './containers/hello';
import reducers from './redux/reducers';
import configureStore from './app/store/configure-store';


const initialState = window.__INITIAL_STATE__;
const store = configureStore(reducers, initialState);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Hello} />
          <Route path="/sayhello" component={SayHello} />
          <Route path="/sayhelloagain" component={SayHelloAgain} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
