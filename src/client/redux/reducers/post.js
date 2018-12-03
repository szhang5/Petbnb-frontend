import * as ACTIONS from "../actions/index";

const initialState = {
  posts : [],

}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.GET_POST_ACTION:
	    return {
        'posts': action.payload.data.post,
        
	    };
    default:
      return state;
  }
}