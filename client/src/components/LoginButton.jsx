import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import '../styles/LoginButton.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="log-in-button">Sign In with Google</button>;
};

export default LoginButton;