import React from 'react';
import './login.scss';
import deal_red from "../../assets/navbar/deal_red.png"

function Login() {

  return(
    <div className="betterclass">
        <img src={deal_red} alt="deal_red" className="image"/>
        <input className="inputField" type="text" placeholder="Email"/>
        <input className="inputField" type="password" placeholder="Password"/>
    </div>
  )
}

export default Login;