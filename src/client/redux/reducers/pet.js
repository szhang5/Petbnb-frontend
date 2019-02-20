import * as ACTIONS from "../actions/index";

const initialState = {
    id: 0,
    uid: 0,
    birth: "",
    petname: "",
    type: "",
    breed: "",
    furcolor: "",
    weight: "",
    image: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_PET_INFO: 
      return {
        pets: action.payload.data.pet,
      }
    case ACTIONS.EDIT_PET_PROFILE_ACTION:
      return {
        id:action.payload.data.id,
        uid:action.payload.data.uid,
        birth:action.payload.data.birth,
        petname:action.payload.data.petname,
        type: action.payload.data.type,
        breed: action.payload.data.breed,
        furcolor: action.payload.data.furcolor,
        weight: action.payload.data.weight,
        image:action.payload.data.image,
      };
      case ACTIONS.CREATE_PET_PROFILE_ACTION:
      return{
        ...state,
          uid:action.payload.data.uid,
      }
      case ACTIONS.UPDATE_PET_INFO:
      return {
          ...state,
          [action.field]:action.value,
      }
      case ACTIONS.UPDATE_PET_INFO:
      return {
        ...state,
        image: action.payload.data.imageUrl,
      }
    default:
      return state;
  }
}
