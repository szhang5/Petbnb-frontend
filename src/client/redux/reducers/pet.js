import * as ACTIONS from "../actions/index";

const initialState = {
    petid: 1,
    uid: 0,
    birth: "",
    petname: "",
    type: "",
    breed: "",
    furcolor: "",
    weight: "",
    image: "",
    pets: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_PET_INFO_BY_ID: 
    console.log(action);
    return {
      petid:action.payload.data.petid,
      uid: action.payload.data.uid,
      birth:action.payload.data.birth,
      petname:action.payload.data.petname,
      type: action.payload.data.type,
      breed: action.payload.data.breed,
      furcolor: action.payload.data.furcolor,
      weight: action.payload.data.weight,
      image: action.payload.data.image,
    }
    case ACTIONS.GET_PET_INFO: 
      return {
        pets: action.payload.data.pet,
      };
    case ACTIONS.EDIT_PET_PROFILE_ACTION:
    //console.log("pet20");
      return {
        ...state,
        petid:action.payload.data.petid,
        birth:action.payload.data.birth,
        petname:action.payload.data.petname,
        type: action.payload.data.type,
        breed: action.payload.data.breed,
        furcolor: action.payload.data.furcolor,
        weight: action.payload.data.weight,
      };
      case ACTIONS.CREATE_PET_PROFILE_ACTION:
      return{
        ...state,
          uid:action.payload.data.uid,
         
      };
      case ACTIONS.UPDATE_PET_INFO:
      return {
            ...state,
           
          [action.field]:action.value,
      }
      case ACTIONS.UPLOAD_PET_IMAGE_ACTION:
      return {
        ...state,
        
        image: action.payload.data.imageUrl,
      }
    default:
      return state;
  }
}
