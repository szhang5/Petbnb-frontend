import axios from 'axios';

export const SAY_HELLO = 'SAY_HELLO';
export const SAY_HELLO_AGAIN = 'SAY_HELLO_AGAIN';


export function sayHello() {
  const request = axios
    .post('/service/petbnbservice/SayHello', {name: 'shiyun'});

  return {
    type: SAY_HELLO,
    payload: request,
  };
}

export function sayHelloAgain() {
  const request = axios
    .post('/service/petbnbservice/SayHelloAgain', {name: 'shiyun Zhang'});

  return {
    type: SAY_HELLO_AGAIN,
    payload: request,
  };
}
