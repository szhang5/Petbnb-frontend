import { combineReducers } from 'redux';
import UserReducer from './user';
import PostReducer from './post';
import PetReducer from './pet';
import TransactionReducer from './transaction';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // form: formReducer,
  user: UserReducer,
  post: PostReducer,
  pet: PetReducer,
  transaction: TransactionReducer,
});

export default rootReducer;