import { combineReducers } from 'redux';
import BlogReducer from './blog-reducer';
import HelloReducer from './hello-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  blogs: BlogReducer,
  hello: HelloReducer,
  form: formReducer
});

export default rootReducer;