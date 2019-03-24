import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

const middleware = [
  promise,
  thunkMiddleware
];
const enhancer = applyMiddleware(...middleware);

export default function configureStore(reducer, initialState) {
  const store = enhancer(createStore)(reducer);

  return store;
}
