import React,{useState} from 'react';
import axios from 'axios';
import './auth.css';

export const Login =()=>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <div className='wrapper'>
            <form >
                <h1>LOGIN</h1>
                
                <div className='input-box'>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                    />
                </div>
                <div className='input-box'>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Login</button>
                <p className="switch">Don't have an account? <a href="#" className='register-link' >Register here</a></p>
            </form>
        </div>
    );
}