import * as ACTIONS from "../actions/index";

const initialState = {
  posts: [],
  sitterid: "",
  avai_end_date: "",
  avai_start_date: "",
  description: "",
  hour_rate: "",
  pet_type: "",
  pets_num: "",
  postdate: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_POST_ACTION:
      return {
        posts: action.payload.data.post
      };
    case ACTIONS.CREATE_POST_ACTION:
      return initialState;
    case ACTIONS.SEARCH_POST_ACTION:
      return {
        posts: action.payload.data.post
      };
    case ACTIONS.GET_USER_POST_ACTION:
    console.log(action.payload);
      return {
        sitterid: action.payload.data.post.sitterid,
        avai_end_date: action.payload.data.post.avai_end_date,
        avai_start_date: action.payload.data.post.avai_start_date,
        description: action.payload.data.post.description,
        hour_rate: action.payload.data.post.hour_rate,
        pet_type: action.payload.data.post.pet_type,
        pets_num: action.payload.data.post.pets_num,
        postdate: action.payload.data.post.postdate
      };
   
    default:
      return state;
  }
}
