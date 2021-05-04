export const getToken = (user) => {
  sessionStorage.setItem('token', JSON.stringify(user));
}

export const clearToken = () => {
  sessionStorage.clear();
}

export const checkToken = (user) => {
  return sessionStorage.getItem('token') === JSON.stringify(user);
}