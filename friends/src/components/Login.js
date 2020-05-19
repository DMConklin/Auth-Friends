import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosAuth';


const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/protected');
            })
            .catch(err => console.log(err));
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;