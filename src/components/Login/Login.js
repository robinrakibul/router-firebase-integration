import React from 'react';

const Login = () => {
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
                <button>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;