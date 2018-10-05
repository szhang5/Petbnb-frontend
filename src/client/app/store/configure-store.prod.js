import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

const middleware = [
  promise
];
const enhancer = applyMiddleware(...middleware);

export default function configureStore(reducer, initialState) {
  const store = enhancer(createStore)(reducer);

  return store;
}
