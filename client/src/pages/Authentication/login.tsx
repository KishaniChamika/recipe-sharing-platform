import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';
import './auth.css';

interface LoginProps {
  switchForm: () => void;
  onLogin: (status: boolean) => void; // Added prop for login status update
}

export const Login: React.FC<LoginProps> = ({ switchForm, onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);

      if (data.token) {
        localStorage.setItem("accessToken", data.token);
        alert(`Login successful: ${data.message}`);
        onLogin(true); // Call the function to update login status
        navigate('/');
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (err: any) {
      console.error("Login error:", err.message);
      alert(`An error occurred during login: ${err.message}`);
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
              onChange={(event) => setEmail(event.target.value)}
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
          <p className="switch">Don't have an account? <a href="#" onClick={switchForm} className='register-link'>Register here</a></p>
        </form>
      </div>
    </div>
  );
};
