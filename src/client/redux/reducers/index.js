import { combineReducers } from 'redux';
import UserReducer from './user';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // form: formReducer,
  user: UserReducer,
});

export default rootReducer;