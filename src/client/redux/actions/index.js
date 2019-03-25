import axios from 'axios';

export const SIGN_IN_ACTION = 'SIGN_IN_ACTION';
export const REGISTER_ACTION = 'REGISTER_ACTION';
export const SIGNOUT = 'SIGNOUT';

export const GET_USER_INFO = 'GET_USER_INFO';
export const EDIT_PROFILE_ACTION = 'EDIT_PROFILE_ACTION';
export const GET_USER_GEO_LOCATION = "GET_USER_GEO_LOCATION";
export const GET_USER_INFO_BYID = "GET_USER_INFO_BYID";

export const GET_POST_ACTION = 'GET_POST_ACTION';
export const GET_USER_POST_ACTION = 'GET_USER_POST_ACTION';
export const CREATE_POST_ACTION = 'CREATE_POST_ACTION';
export const SEARCH_POST_ACTION = 'SEARCH_POST_ACTION';
export const EDIT_POST_ACTION = 'EDIT_POST_ACTION';
export const SEARCH_POST_SITTER_INFO_ACTION = 'SEARCH_POST_SITTER_INFO_ACTION';
export const GET_ALL_SITTER_POST_INFO = 'GET_ALL_SITTER_POST_INFO';
export const SEARCH_SITTER_POST_INFO = 'SEARCH_SITTER_POST_INFO';

export const UPLOAD_IMAGE_ACTION = 'UPLOAD_IMAGE_ACTION';
export const UPLOAD_PET_IMAGE_ACTION = 'UPLOAD_PET_IMAGE_ACTION';

export const UPDATE_INPUT_INFO = 'UPDATE_INPUT_INFO';

export const EDIT_PET_PROFILE_ACTION = 'EDIT_PET_PROFILE_ACTION';
export const CREATE_PET_PROFILE_ACTION = 'CREATE_PET_PROFILE_ACTION';
export const GET_PET_INFO = "GET_PET_INFO";
export const GET_PET_INFO_BY_ID = "GET_PET_INFO_BY_ID";
export const DELETE_PET_ACTION = "DELETE_PET_ACTION";
export const UPDATE_PET_TYPES = "PET/UPDATE_PET_TYPES";


export const CREATE_TRANSACTION = "PET/CREATE_TRANSACTION";


export function createTransaction(sitterid, petid) {
  console.log("dafdafafafkjrjgwogji" , sitterid, petid);
  const request = axios
    .post('/service/petbnbservice/createTransaction', { sitterid, petid });
  return {
    type: CREATE_TRANSACTION,
    payload: request,
  }
}

export function searchSitterPostInfo(payload) {
  const request = axios
    .post('/service/petbnbservice/searchPostAndSitterInfo', {
        ...payload,
        hour_rate: parseFloat(payload.hour_rate),
        pets_num: parseInt(payload.pets_num, 10),
    });
  return {
    type: SEARCH_SITTER_POST_INFO,
     payload: request,
  }
}

export function getAllSitterPostInfo() {
  const request = axios
    .post('/service/petbnbservice/homePageSitterPostInfo', {});
  return {
    type: GET_ALL_SITTER_POST_INFO,
     payload: request,
  }
}


export function deletePet(petid) {
  const request = axios
    .post('/service/petbnbservice/deletePet', {petid});
  return {
    type: DELETE_PET_ACTION,
    payload: request,
  }
}

export function GetPetInfoById(petid) {
  const request = axios
    .post('/service/petbnbservice/getPetInfoById', {petid});
  return {
    type: GET_PET_INFO_BY_ID,
    payload: request,
  }
}

export function getUsersGeoLocation() {
  const request = axios
    .post('/service/petbnbservice/getUsersGeoLocation', {});
  return {
    type: GET_USER_GEO_LOCATION,
    payload: request,
  }
}

export function getPetInfo(uid) {
  const request = axios
    .post('/service/petbnbservice/getPetInfo', { uid });
  return {
    type: GET_PET_INFO,
    payload: request,
  }
}

export function UploadPetImage(petid, image_base_64) {
  const request = axios
    .post('/service/petbnbservice/petImageUpload', { petid, image_base_64 });
  return {
    type: UPLOAD_PET_IMAGE_ACTION,
    payload: request,
  }
}


export function UploadImage(email, image_base_64) {
  const request = axios
    .post('/service/petbnbservice/imageUpload', { email, image_base_64 });
  return {
    type: UPLOAD_IMAGE_ACTION,
    payload: request,
  }
}

export function GetUserPost(uid) {
  // console.log(uid);
  const request = axios
    .post('/service/petbnbservice/getUserPost', { uid });
  return {
    type: GET_USER_POST_ACTION,
    payload: request,
  }
}


export function CreatPost(payload) {
  const request = axios
    .post('/service/petbnbservice/createPost', payload);
  return {
    type: CREATE_POST_ACTION,
    payload: request,
  }
}


export function SearchPost(payload) {
  const request = axios
    .post('/service/petbnbservice/searchPost', {
      ...payload,
      hour_rate: parseFloat(payload.hour_rate),
      pets_num: parseInt(payload.pets_num, 10),
    });
  return {
    type: SEARCH_POST_ACTION,
    payload: request,
  }
}

export function searchPostSitterInfo(payload) {
  const request = axios
    .post('/service/petbnbservice/searchPostSitterInfo', {
      ...payload,
      hour_rate: parseFloat(payload.hour_rate),
      pets_num: parseInt(payload.pets_num, 10),
    });
  return {
    type: SEARCH_POST_SITTER_INFO_ACTION,
    payload: request,
  }
}

export function editPost(payload) {
  const request = axios
    .post('/service/petbnbservice/editPost', {
      ...payload,
      hour_rate: parseFloat(payload.hour_rate),
      pets_num: parseInt(payload.pets_num, 10),
    });
  return {
    type: EDIT_POST_ACTION,
    payload: request,
  }
}


export function getPost() {
  const request = axios
    .post('/service/petbnbservice/getPost', {});
  return {
    type: GET_POST_ACTION,
     payload: request,
  }
}


export function EditProfileAction(payload) {
  const request = axios
    .post('/service/petbnbservice/editProfile', payload);

  return {
    type: EDIT_PROFILE_ACTION,
    payload: request,
  };
}
export function EditPetProfileAction(payload) {
  console.log(payload);
  const request = axios
    .post('/service/petbnbservice/editPet', payload);

  return {
    type: EDIT_PET_PROFILE_ACTION,
    payload: request,
  };
}

export function CreatePetProfileAction(payload) {
  const request = axios
    .post('/service/petbnbservice/createPet', payload);

  return {
    type:CREATE_PET_PROFILE_ACTION,
    payload: request,
  };
}


export function signInAction(payload) {
  const request = axios
    .post('/service/petbnbservice/signIn', payload);

  return {
    type: SIGN_IN_ACTION,
    payload: request,
  };
}

export function registerAction(payload) {
  const response = axios
    .post('/service/petbnbservice/register', payload);

  return {
    type: REGISTER_ACTION,
    payload: response,
  };
}

export function isLogin() {
  return axios.post('/isLogin');
}

export function getUserInfo(email) {
  const request = axios
    .post('/service/petbnbservice/getUserInfo', { email });

  return {
    type: GET_USER_INFO,
    payload: request,
  };
}

export function getUserInfoById(uid) {
  const request = axios
    .post('/service/petbnbservice/getUserInfoById', { uid });

  return {
    type: GET_USER_INFO_BYID,
    payload: request,
  };
}


export function signOut() {
  const request = axios
    .post('/signOut');

  return {
    type: SIGNOUT,
  };
}

export function updateInputInfo(field, value){
  return {
    type: UPDATE_INPUT_INFO,
    field,
    value,
  };
}

export function updatePetTypes(field, value){
  return {
    type: UPDATE_PET_TYPES,
    field,
    value,
  };
}
