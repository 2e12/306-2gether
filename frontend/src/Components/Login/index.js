import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { checkToken, getToken } from '../../utils/Token';
import './login.scss';
import deal_red from "../../assets/navbar/deal_red.png"
import { getUser } from '../../utils/User';

function Login({setToken, setPassword, setUser}) {
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();

  const login = async (e) => {
    e.preventDefault();
    var user = await getUser(username, pwd);
    if(user) {
      getToken(user, pwd)
      if(checkToken(user)){
        setUser(user);
        setPassword(pwd);
        setToken(true);
      }
    } else {
      alert("Der Benutzername oder das Passwort ist falsch");
    }
  }

  return(
    <div className="betterclass">
        <img src={deal_red} alt="deal_red" className="image"/>
        <form onSubmit={(e) => login(e)} >
          <input className="input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
          <input className="input" type="password" placeholder="Passwort" onChange={(e) => setPwd(e.target.value)} required/>
          <input type="submit" className="button" yalue="Login" />
        </form>
        <p className="question">Hast du noch kein Konto?</p>
        <Link className="link" to='/register'>Registrieren</Link>
    </div>
  )
}

export default Login;