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
    'user_type': '',
    geoLocation:[],
    sitterInfo:[]    
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.GET_USER_INFO_BYID:
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
    default:
      return state;
  }
}