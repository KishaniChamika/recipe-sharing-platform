import React,{useState} from "react";
import './auth.css';

interface RegisterProps {
    switchForm: () => void;
}

export const Register: React.FC<RegisterProps> = ({ switchForm }) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Registration details: \nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
        switchForm(); 
    };

    return(
        <div className='auth-background'>
        <div className="wrapper">
        <form >
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