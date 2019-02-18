import * as ACTIONS from "../actions/index";

const initialState = {
  petid:"",
  uid:"",
  birth: "",
  color: "",
  type: "",
  name: "",
  weight: "",
  breed: "",
  image: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_PET_INFO:
      // console.log('action: ', action);
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}