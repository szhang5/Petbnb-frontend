import moment from "moment";
import { forEach } from 'lodash';
import * as ACTIONS from "../actions/index";


const initialState = {
  posts: [],
  sitterPosts:[],
  sitterid: "",
  avai_end_date: "",
  avai_start_date: "",
  description: "",
  hour_rate: "",
  pet_type: {},
  pets_num: "",
  postdate: "",
};

export function getPetType(types) {
  const res = {}
  const typesArr = types.split(',');
  forEach(typesArr, type => {
    if(type) {
      res[type.trim()] = true;
    }
  })
  return res;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_ALL_SITTER_POST_INFO:
      return{
        ...state,
        sitterPosts: action.payload.data.sitterPostInfo,
      };
    case ACTIONS.GET_POST_ACTION:
      return {
        ...state,
        posts: action.payload.data.post
      };
    case ACTIONS.CREATE_POST_ACTION:
      return initialState;
    case ACTIONS.SEARCH_POST_ACTION:
      return {
        ...state,
        posts: action.payload.data.post,
      };
    case ACTIONS.SEARCH_SITTER_POST_INFO:
          //console.log(action.payload)
      return {
        ...state,
        posts:action.payload.data.sitterPostInfo,
      }
    case ACTIONS.GET_USER_POST_ACTION:
      return {
        ...state,
        sitterid: action.payload.data.post.sitterid,
        avai_end_date: moment(action.payload.data.post.avai_end_date).format('YYYY-MM-DD'),
        avai_start_date: moment(action.payload.data.post.avai_start_date).format('YYYY-MM-DD'),
        description: action.payload.data.post.description,
        hour_rate: action.payload.data.post.hour_rate,
        pet_type: getPetType(action.payload.data.post.pet_type),
        pets_num: action.payload.data.post.pets_num,
        postdate: action.payload.data.post.postdate
      };
    case ACTIONS.UPDATE_INPUT_INFO:
      return {
        ...state,
        [action.field]: action.value,
      }
    case ACTIONS.UPDATE_PET_TYPES: {
      return {
        ...state,
        pet_type: {
          ...state.pet_type,
          [action.field]: !state.pet_type[action.field],
        }
      }
    }
    default:
      return state;
  }
}
