export const getToken = (user, pwd) => {
  sessionStorage.setItem('token', JSON.stringify(user));
  sessionStorage.setItem('pwd', pwd);
}

export const clearToken = () => {
  sessionStorage.clear();
}

export const checkToken = (user) => {
  return sessionStorage.getItem('token') === JSON.stringify(user);
}