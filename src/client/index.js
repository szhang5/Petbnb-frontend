import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import BlogIndex from './containers/blog-index';
import BlogNew from './containers/blog-new';
import BlogShow from './containers/blog-show';
import SayHello from './containers/say-hello';
import reducers from './redux/reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
