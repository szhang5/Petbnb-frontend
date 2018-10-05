import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BlogIndex from './containers/blog-index';
import BlogNew from './containers/blog-new';
import BlogShow from './containers/blog-show';
import SayHello from './containers/say-hello';
import reducers from './redux/reducers';
import configureStore from './app/store/configure-store';


const initialState = window.__INITIAL_STATE__;
const store = configureStore(reducers, initialState);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/blog/new" component={BlogNew} />
          <Route path="/blog/:id" component={BlogShow} />
          <Route path="/sayhello" component={SayHello} />
          <Route path="/" component={ BlogIndex }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
