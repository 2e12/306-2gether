import { v4 as uuid} from "uuid";

export const getToken = () => {
  sessionStorage.setItem('token', uuid());
}

export const clearToken = () => {
  sessionStorage.clear();
}

export const checkToken = () => {
  return sessionStorage.getItem('token');
}