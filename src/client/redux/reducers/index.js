import { combineReducers } from 'redux';
import UserReducer from './user';
import SitterReducer from './sitter';
import PostReducer from './post';
import PetReducer from './pet';
import TransactionReducer from './transaction';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // form: formReducer,
  user: UserReducer,
  sitter: SitterReducer,
  post: PostReducer,
  pet: PetReducer,
  transaction: TransactionReducer,
});

export default rootReducer;