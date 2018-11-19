import * as ACTIONS from "../actions/index";

const initialState = {
  	'name': '',
  	'email': '',
  	'userid': 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.SIGN_IN_ACTION:
	    return {
	    	'name': action.payload.data.user.name,
	    	'email': action.payload.data.user.email,
	    	'userid': action.payload.data.user.userid,
	    };
    case ACTIONS.REGISTER_ACTION:
      return initialState;
    case ACTIONS.GET_USER_INFO:
      return {
      	'name': action.payload.data.user.name,
      	'email': action.payload.data.user.email,
      	'userid': action.payload.data.user.userid,
      };
	  case ACTIONS.SIGNOUT:
	  	return initialState;
    default:
      return state;
  }
}