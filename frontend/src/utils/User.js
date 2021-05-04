import axios from 'axios';
import {API_PATH} from './ENV_Variable';

export const getUser = async (uname, pwd) => {
  var url = API_PATH + `/me`;
  const config = {
    auth: {
      username: uname,
      password: pwd
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

export function editUser(user, uname, pwd) {
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