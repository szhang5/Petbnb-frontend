import { combineReducers } from 'redux';
import UserReducer from './user';
import PostReducer from './post'
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // form: formReducer,
  user: UserReducer,
  post: PostReducer,
});

export default rootReducer;