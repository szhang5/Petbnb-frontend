import * as ACTIONS from "../actions/index";

const initialState = {
  	'uid': '',
    'personId': '',
    'firstname': '',
    'lastname': '',
  	'email': '',
  	'phone': '',
    'street': '',
    'city': '',
    'state': '',
    'zip': '',
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.SIGN_IN_ACTION:
	    return {
        'uid': action.payload.data.user.uid,
        'personId': action.payload.data.user.personid,
        'firstname': action.payload.data.user.firstname,
        'lastname': action.payload.data.user.lastname,
        'email': action.payload.data.user.email,
        'phone': action.payload.data.user.phone,
        'street': action.payload.data.user.street,
        'city': action.payload.data.user.city,
        'state': action.payload.data.user.state,
        'zip': action.payload.data.user.zip,
	    };
    case ACTIONS.REGISTER_ACTION:
      return initialState;
    case ACTIONS.GET_USER_INFO:
      return {
      	'uid': action.payload.data.user.uid,
        'personId': action.payload.data.user.personid,
        'firstname': action.payload.data.user.firstname,
        'lastname': action.payload.data.user.lastname,
        'email': action.payload.data.user.email,
        'phone': action.payload.data.user.phone,
        'street': action.payload.data.user.street,
        'city': action.payload.data.user.city,
        'state': action.payload.data.user.state,
        'zip': action.payload.data.user.zip,      
      };
	  case ACTIONS.SIGNOUT:
	  	return initialState;
    case ACTIONS.EDIT_PROFILE_ACTION:
       return {
        'uid': action.payload.data.user.uid,
        'personId': action.payload.data.user.personid,
        'firstname': action.payload.data.user.firstname,
        'lastname': action.payload.data.user.lastname,
        'email': action.payload.data.user.email,
        'phone': action.payload.data.user.phone,
        'street': action.payload.data.user.street,
        'city': action.payload.data.user.city,
        'state': action.payload.data.user.state,
        'zip': action.payload.data.user.zip,           
      };
    default:
      return state;
  }
}