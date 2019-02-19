import * as ACTIONS from "../actions/index";

const initialState = {
 //   name: "",
    id:"",
    uid:"",
    birth:"",
    petname:"",
    type: "",
    breed: "",
    furcolor: "",
    weight: "",
    image:""
};

export default function(state = initialState, action) {
   // console.log("pet20"+action);
  switch (action.type) {
    case ACTIONS.EDIT_PET_PROFILE_ACTION:
  
      return {
        name: action.payload.data.pet.name,
         id:action.payload.data.pet.id,
         uid:action.payload.data.pet.uid,
         birth:action.payload.data.pet.birth,
         petname:action.payload.data.pet.petname,
         type: action.payload.data.pet.type,
         breed: action.payload.data.pet.breed,
         furcolor: action.payload.data.pet.furcolor,
         weight: action.payload.data.pet.weight,
         image:action.payload.data.pet.image,
      };
      case ACTIONS.CREATE_PET_PROFILE_ACTION:
      return{
        ...state,
          uid:action.payload.data.pet.uid,
         
      }
      case ACTIONS.UPDATE_PET_INFO:
      console.log("pet20"+action.field);
      return {

          ...state,
          [action.field]:action.value,
      }
    default:
      return state;
  }
}
