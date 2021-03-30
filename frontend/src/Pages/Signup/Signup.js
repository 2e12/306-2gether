import React, {useState} from 'react';
import './signup.css';


function Signup(isLogin) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return(
    <div className='div-login'>
        <div>
            <form onSubmit = {isLogin(true)}>
                <input type='email' name='email' placeholder='email...' required onChange={(e) => setEmail(e.target)}/>
                <input type='password' name='pwd' placeholder='password...' required onChange={(e) => setPwd(e.target)}/>
                <button onSubmit={isLogin(true)}>Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default Signup;