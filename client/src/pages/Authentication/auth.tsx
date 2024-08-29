import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

interface AuthProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Auth: React.FC<AuthProps> = ({ setIsLoggedIn }) => {
  const [showLogin, setShowLogin] = useState(true);

  const switchForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="auth">
      <div>
        {showLogin ? (
          <Login switchForm={switchForm} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Register switchForm={switchForm} />
        )}
      </div>
    </div>
  );
};
