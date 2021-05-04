import React from 'react';
import { Link } from 'react-router-dom';
import { checkToken, getToken } from '../../utils/Token';
import './login.scss';
import deal_red from "../../assets/navbar/deal_red.png"

function Login({setToken}) {

  const saveToken = () => {
    getToken()
    setToken(checkToken())
  }

  return(
    <div className="betterclass">
        <img src={deal_red} alt="deal_red" className="image"/>
        <input className="inputField" type="text" placeholder="Email"/>
        <input className="inputField" type="password" placeholder="Password"/>
    </div>
  )
}

export default Login;