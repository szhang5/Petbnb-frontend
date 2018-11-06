import { combineReducers } from 'redux';
import HelloReducer from './hello-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  hello: HelloReducer,
  form: formReducer
});

export default rootReducer;