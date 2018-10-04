import { omit, mapKeys } from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST, SAY_HELLO } from "../actions/index";

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      return omit(state, action.payload);
      // return _.reject(state, blog => blog.id == action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }; //Computed property names []
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    case SAY_HELLO:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}