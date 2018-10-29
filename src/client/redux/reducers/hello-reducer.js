import { omit, mapKeys } from 'lodash';
import { SAY_HELLO_AGAIN} from "../actions/index";

export default function(state = '', action) {
	// console.log(action);
  switch(action.type) {
    case SAY_HELLO_AGAIN:
      return {message: action.payload.data.message};
    default:
      return state;
  }
}