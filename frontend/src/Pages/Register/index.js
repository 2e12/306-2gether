import React, {useState} from 'react';
import './register.scss';
import Credentials from './Credentials';
import PersonalDetails from './PersonalDetails';
import SocialMedia from './SocialMedia';

function Register({setToken}) {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState();

  var templates = [
    <Credentials setStep={setStep} user={user} setUser={setUser} />,
    <PersonalDetails setStep={setStep} user={user} setUser={setUser} />,
    <SocialMedia setStep={setStep} user={user} setUser={setUser} setToken={setToken} />
  ]

  return(
    <div>
      {templates[step]}
    </div>
  )
}


export default Register;