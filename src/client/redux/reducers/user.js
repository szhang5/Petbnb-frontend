import * as ACTIONS from "../actions/index";

const initialState = {
  	'uid': 0,
    'personId': '',
    'firstname': '',
    'lastname': '',
  	'email': '',
  	'phone': '',
    'street': '',
    'city': '',
    'state': '',
    'zip': '',
    'lat': '',
    'lng': '',
    'image': '',
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.SIGN_IN_ACTION:
	    return {
        ...state,
        'email': action.payload.data.user.email,
	    };
    case ACTIONS.REGISTER_ACTION:
      return initialState;
    case ACTIONS.GET_USER_GEO_LOCATION: 
    return {
       geoLocation: action.payload.data.geoLocation,
    }
    case ACTIONS.GET_USER_INFO:
      return {
        ...state,
      	'uid': action.payload.data.user.uid,
        'personId': action.payload.data.user.personid,
        'firstname': action.payload.data.user.firstname,
        'lastname': action.payload.data.user.lastname,
        'email': action.payload.data.user.email,
        'phone': action.payload.data.user.phone,
        'country': action.payload.data.user.country,
        'street': action.payload.data.user.street,
        'city': action.payload.data.user.city,
        'state': action.payload.data.user.state,
        'zip': action.payload.data.user.zip, 
        'lat': action.payload.data.user.lat, 
        'lng': action.payload.data.user.lng, 
        'image': action.payload.data.user.image,     
      };
	  case ACTIONS.SIGNOUT:
	  	return initialState;
    case ACTIONS.EDIT_PROFILE_ACTION:
      return {
        ...state,
        'uid': action.payload.data.user.uid,
        'personId': action.payload.data.user.personid,
        'firstname': action.payload.data.user.firstname,
        'lastname': action.payload.data.user.lastname,
        'email': action.payload.data.user.email,
        'phone': action.payload.data.user.phone,
        'country': action.payload.data.user.country,
        'street': action.payload.data.user.street,
        'city': action.payload.data.user.city,
        'state': action.payload.data.user.state,
        'zip': action.payload.data.user.zip,        
      };
    case ACTIONS.UPLOAD_IMAGE_ACTION:
      return {
        ...state,
        'image': action.payload.data.imageUrl,
      }
    case ACTIONS.UPDATE_USER_INFO:
      return {
        ...state,
        [action.field]: action.value,
      }
    default:
      return state;
  }
}