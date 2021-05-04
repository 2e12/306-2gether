import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Template from '../Template';
import arrow from '../../../assets/chevron_white_right.png';

function Credentials({setStep, setUser, user}) {
  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmer, setPasswordConfirmer] = useState();

  const header = () => {
    return(
      <div className="header">
        <div className="title">Register</div>
        <div className="status">Credentials</div>
        <div className="container">
          <div className="row lines">
            <div className="line aktiv"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    )
  }

  const nextStep = (e) => {
    if(password.localeCompare(passwordConfirmer) === 0){
      var userLocal = {
        userName: username,
        name: firstname,
        lastName: lastname,
        mail: mail,
        password: password
      };
      setUser(userLocal);
      setStep(1);
    } else  {
      e.preventDefault();
      alert("the password has to be equals")
    }
  }

  return(
    <form onSubmit={(e) => nextStep(e)}>
      <Template header={header()} >
        <div className="credentials">
          <div className="title">Register</div>
          <div className="info">Please enter your credentials to proceed</div>
          <div>
            <div className="username">
              <label htmlFor="username">
                <div>Enter Username</div>
              </label>
              <input type="text" id="username" placeholder="Enter Username" autoComplete="off" onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="firstname">
              <label htmlFor="firstname">
                <div>Enter Firstname</div>
              </label>
              <input type="text" id="firstname" placeholder="Enter Firstname" autoComplete="off" onChange={(e) => setFirstname(e.target.value)} required />
            </div>
            <div className="lastname">
              <label htmlFor="lastname">
                <div>Enter Lastname</div>
              </label>
              <input type="text" id="lastname" placeholder="Enter Lastname" autoComplete="off" onChange={(e) => setLastname(e.target.value)} required />
            </div>
            <div className="mail">
              <label htmlFor="mail">
                <div>Enter Mail</div>
              </label>
              <input type="email" id="mail" placeholder="Enter Mail" autoComplete="off" onChange={(e) => setMail(e.target.value)} required />
            </div>
            <div className="password">
              <label htmlFor="password">
                <div>Enter Password</div>
              </label>
              <input type="password" id="password" placeholder="Enter Password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="passwordConf">
              <label htmlFor="passwordConf">
                <div>Enter Password confirmer</div>
              </label>
              <input type="password" id="passwordConf" placeholder="Enter Password confirmer" autoComplete="off" onChange={(e) => setPasswordConfirmer(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="submitBtn" className="floatRight">
                <img src={arrow} alt="next" className="arrow" />
              </label>
              <input type="submit" id="submitBtn" className="submitBtn" />
            </div>
          </div>
          <div className="toLogIn">
            <div className="question">Hast du schon ein Konto?</div>
            <Link to='/login' className="link">Login</Link>
          </div>
        </div>
      </Template>
    </form>
  )
}


export default Credentials;