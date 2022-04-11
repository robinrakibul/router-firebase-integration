import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login</h3>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div style={{margin:'20px'}}>
                <button onClick={()=>{signInWithGoogle()}}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;