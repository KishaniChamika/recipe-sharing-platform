import React,{useState} from "react";
import { Login } from "./login";
import { Register } from "./register";

export const Auth:React.FC=()=>{
    const [showLogin, setShowLogin] = useState(true);

    const switchForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="auth">
            <div >
                {showLogin ? (
                    <Login switchForm={switchForm}/>
                ) : (
                    <Register />
                )}
            </div>
        </div>
    );

}