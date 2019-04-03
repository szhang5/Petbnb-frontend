import { combineReducers } from 'redux';
import UserReducer from './user';
<<<<<<< HEAD
import SitterReducer from './sitter';
=======
import SitterReducer from './sitter'
>>>>>>> 1e26540aa11080dbe63337c1e945b5c438315e8d
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