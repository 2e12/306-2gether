import React, {useState} from 'react';
import './login.css';

function Login(isLogin) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return(
    <div className='div-login'>
        <div>
            <form>
                <input type='email' name='email' placeholder='email...' required onChange={(e) => setEmail(e.target)}/>
                <input type='password' name='pwd' placeholder='password...' required onChange={(e) => setPwd(e.target)}/>
                <button>Log In</button>
            </form>
        </div>
    </div>
    )
}

export default Login;