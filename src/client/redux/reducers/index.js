import { combineReducers } from 'redux';
import BlogReducer from './blog-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  blogs: BlogReducer,
  form: formReducer
});

export default rootReducer;