import React,{useState} from "react";
import './auth.css';
import { registerUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';

interface RegisterProps {
    switchForm: () => void;
}

export const Register: React.FC<RegisterProps> = ({ switchForm }) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate(); 

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const data = await registerUser(username, email, password);
            if (data.message) {
                alert('Registration successful');
                switchForm();
                navigate('/'); // Redirect to login after successful registration
            } else {
                alert(`Registration failed: ${data.message}`);
            }
        } catch (err: any) {
            // Log the error message for debugging
            console.error('Registration error:', err.message);
            alert(`An error occurred during registration: ${err.message}`);
        }
    };
    return(
        <div className='auth-background'>
        <div className="wrapper">
        <form  onSubmit={onSubmit}>
                <h1>REGISTER</h1>

                <div className="input-box">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                
                <button type="submit" >Register</button>
                <p className='switch'>Already have an account? <a href="#" onClick={switchForm} className='register-link' >Login here</a></p>
            </form>
            </div>
        </div>
        
    )
}