import axios from 'axios';
import {API_PATH} from './ENV_Variable';

export const getUser = async (uname, pwd) => {
  var username;
  var password;
  if(sessionStorage.getItem('token') && sessionStorage.getItem('pwd')){
    username = JSON.parse(sessionStorage.getItem('token')).username;
    password = sessionStorage.getItem('pwd');
  } else {
    username = uname;
    password = pwd;
  }
  var url = API_PATH + `/me`;
  const config = {
    auth: {
      username: username,
      password: password
    }
  };
  const user = await axios.get(url, config)
  .then(function (res) {
    return res.data;
  })
  .catch(function (err) {
    console.error('err', err);
    return null
  });
  return user;
};

export function editUser(user) {
  var uname = JSON.parse(sessionStorage.getItem('token')).username;
  var pwd = sessionStorage.getItem('pwd');
  var url = API_PATH + `/me`;
  var response;
  axios.put(url, user, {
    auth: {
      username: uname,
      password: pwd
    }
  })
  .then(function (res) {
    response = res.data;
    console.log(response);
  })
  .catch(function (err) {
    console.error('err', err);
  });
};

export function createUser(user) {
  var url = API_PATH + `/me`;
  var response;
  axios.post(url, user)
  .then(function (res) {
    response = res.data;
    console.log(response);
  })
  .catch(function (err) {
    console.error('err', err);
  });
};

export function removeUser() {
  var url = API_PATH + `/me`;
  var response;
  axios.delete(url)
  .then(function (res) {
    response = res.data;
    console.log(response);
  })
  .catch(function (err) {
    console.error('err', err);
  });
};