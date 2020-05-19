import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosAuth';


const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/protected');
            })
            .catch(err => console.log(err));
    }

    const handleChange = e => {
        console.log(credentials);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;