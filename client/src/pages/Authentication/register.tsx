import React,{useState} from "react";
import './auth.css';

export const Register=()=>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

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
                        placeholder="Enter your username"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                    />
                </div>

                
                <button type="submit" >Register</button>
                <p className='switch'>Already have an account? <a href="#" className='register-link' >Login here</a></p>
            </form>
            </div>
        </div>
        
    )
}