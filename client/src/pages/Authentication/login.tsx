import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';

interface LoginProps {
  switchForm: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<LoginProps> = ({ switchForm, setIsLoggedIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Call the loginUser function to send the POST request
      const data = await loginUser(email, password);

      if (data.token) {
        // Store the token in localStorage
        localStorage.setItem("accessToken", data.token);
        alert(`Login successful: ${data.message}`);
        setIsLoggedIn(true);  // Set login state to true
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
          <button  className="submit" type="submit">Login</button>
          <p className="switch">Don't have an account? <button onClick={switchForm} className='register-link'>Register here</button></p>
        </form>
      </div>
    </div>
  );
};
