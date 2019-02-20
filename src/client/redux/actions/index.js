import axios from 'axios';

export const SIGN_IN_ACTION = 'SIGN_IN_ACTION';
export const REGISTER_ACTION = 'REGISTER_ACTION';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SIGNOUT = 'SIGNOUT';
export const EDIT_PROFILE_ACTION = 'EDIT_PROFILE_ACTION';
export const GET_POST_ACTION = 'GET_POST_ACTION';
export const GET_USER_POST_ACTION = 'GET_USER_POST_ACTION';
export const CREATE_POST_ACTION = 'CREATE_POST_ACTION';
export const SEARCH_POST_ACTION = 'SEARCH_POST_ACTION';
export const UPLOAD_IMAGE_ACTION = 'UPLOAD_IMAGE_ACTION';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const EDIT_PET_PROFILE_ACTION = 'EDIT_PET_PROFILE_ACTION';
export const CREATE_PET_PROFILE_ACTION = 'CREATE_PET_PROFILE_ACTION';
export const UPDATE_PET_INFO = "UPDATE_PET_INFO";

export function UploadImage(email, image_base_64) {
  const request = axios
    .post('/service/petbnbservice/imageUpload', { email, image_base_64 });
  return {
    type: UPLOAD_IMAGE_ACTION,
    payload: request,
  }
}

export function GetUserPost(payload) {
  const request = axios
    .post('/service/petbnbservice/getUserPost', payload);
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
  const request = axios
    .post('/service/petbnbservice/editPet', payload);

  return {
    type: EDIT_PET_PROFILE_ACTION,
    payload: request,
  };
}
export function UpdatePetInfo(field, value){
  return {
    type: UPDATE_PET_INFO,
    field,
    value,
  };
}
export function CreatePetProfileAction(uid) {
  console.log(uid);
  const request = axios
    .post('/service/petbnbservice/createPet', {uid});

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

export function signOut() {
  const request = axios
    .post('/signOut');

  return {
    type: SIGNOUT,
  };
}

export function UpdateUserInfo(field, value){
  return {
    type: UPDATE_USER_INFO,
    field,
    value,
  };
}

