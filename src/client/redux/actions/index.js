import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SAY_HELLO = 'SAY_HELLO';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=gaotang1234';

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callBack) {
  const request = axios
    .post(`${BASE_URL}/posts${API_KEY}`, values)
    .then(()=>callBack());

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id, callBack) {
  const request = axios
    .delete(`${BASE_URL}/posts/${id}${API_KEY}`)
    .then(() => callBack());

  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function sayHello() {
  const request = axios
    .post('/service/petbnbservice/sayHelloAgain', {name: 'gt'});

  return {
    type: SAY_HELLO,
    payload: request,
  };
}
