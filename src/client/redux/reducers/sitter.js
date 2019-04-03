import * as ACTIONS from "../actions/index";

const initialState = {
    'sitterid':0,
    'sitterpersonId': '',
    'sitterfirstname': '',
    'sitterlastname': '',
  	'sitteremail': '',
  	'sitterphone': '',
    'sitterstreet': '',
    'sittercity': '',
    'sitterstate': '',
    'sitterzip': '',
    'sitterlat': '',
    'sitterlng': '',
    'sitterimage': '',
    'sitteruser_type': 2,
     
}

export default function(state = initialState, action) {
  switch(action.type) {
    
    case ACTIONS.GET_SITTER_INFO_BYID:
    console.log(action.payload)
      return {
      	'sitterid': action.payload.data.sitter.sitterid,
        'sitterpersonId': action.payload.data.sitter.personid,
        'sitterfirstname': action.payload.data.sitter.firstname,
        'sitterlastname': action.payload.data.sitter.lastname,
        'sitteremail': action.payload.data.sitter.email,
        'sitterphone': action.payload.data.sitter.phone,
        'sittercountry': action.payload.data.sitter.country,
        'sitterstreet': action.payload.data.sitter.street,
        'sittercity': action.payload.data.sitter.city,
        'sitterstate': action.payload.data.sitter.state,
        'sitterzip': action.payload.data.sitter.zip, 
        'sitterlat': action.payload.data.sitter.lat, 
        'sitterlng': action.payload.data.sitter.lng, 
        'sitterimage': action.payload.data.sitter.image,     
      };
    
    default:
      return state;
  }
}