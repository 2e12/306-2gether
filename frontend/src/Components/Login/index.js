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
        <input className="input" type="text" placeholder="Username"/>
        <input className="input" type="password" placeholder="Passwort"/>
        <button className="button">Login</button>
        <p className="question">Hast du noch kein Konto?</p>
        <Link className="link" to='/register'>Registrieren</Link>
    </div>
  )
}

export default Login;