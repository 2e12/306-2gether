import React from 'react';
import { Link } from 'react-router-dom';
import { checkToken, getToken } from '../../utils/Token';
import './login.scss';

function Login({setToken}) {

  const saveToken = () => {
    getToken()
    setToken(checkToken())
  }

  return(
    <div>
      <div className="logIn">
        <p>Login</p>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Login;