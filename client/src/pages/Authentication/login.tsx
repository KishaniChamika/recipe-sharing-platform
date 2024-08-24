import React,{useState} from 'react';
import axios from 'axios';
import './auth.css';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    switchForm: () => void;
};



export const Login: React.FC <LoginProps> = ({ switchForm })=>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (email && password) { // Basic validation check
            alert(`Login successful: \nEmail: ${email}`);
            navigate('/home'); // Redirect to the home page
        } else {
            alert("Please enter both email and password.");
        }
        
    };

    return (
        <div className='auth-background'>
        <div className='wrapper'>
            <form onSubmit={onSubmit}>
                <h1>LOGIN</h1>
                
                <div className='input-box'>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className='input-box'>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Login</button>
                <p className="switch">Don't have an account? <a href="#" onClick={switchForm} className='register-link' >Register here</a></p>
            </form>
        </div>
        </div>
    );
}