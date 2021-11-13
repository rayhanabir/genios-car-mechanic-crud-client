import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} =useAuth()
    return (
        <div>
            <h3>please log in</h3>
            <button className="btn btn-warning" onClick={signInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;
