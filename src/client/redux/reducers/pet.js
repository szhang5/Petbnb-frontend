import * as ACTIONS from "../actions/index";

const initialState = {

    petid:0,
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
    console.log("pet20");
      return {
        //name: action.payload.data.pet.name,
         
     //    uid:action.payload.data.pet.uid,
         petid:action.payload.data.petid,
         birth:action.payload.data.birth,
         petname:action.payload.data.petname,
         type: action.payload.data.type,
         breed: action.payload.data.breed,
         furcolor: action.payload.data.furcolor,
         weight: action.payload.data.weight,
        image:action.payload.data.pet.image,
      };
      case ACTIONS.CREATE_PET_PROFILE_ACTION:
      return{
        ...state,
          uid:action.payload.data.pet.uid,
         
      };
      case ACTIONS.UPDATE_PET_INFO:
      return {
            ...state,
          [action.field]:action.value,
      }
    default:
      return state;
  }
}
