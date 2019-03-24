import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();
const middleware = [
  promise,
  loggerMiddleware,
  thunkMiddleware
];
const enhancer = applyMiddleware(...middleware);

export default function configureStore(reducer, initialState) {
  const store = enhancer(createStore)(reducer);

  return store;
}
