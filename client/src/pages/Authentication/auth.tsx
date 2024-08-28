import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

interface AuthProps {
  onLogin: (status: boolean) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  const switchForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="auth">
      <div>
        {showLogin ? (
          <Login switchForm={switchForm} onLogin={onLogin} />
        ) : (
          <Register switchForm={switchForm} />
        )}
      </div>
    </div>
  );
};
