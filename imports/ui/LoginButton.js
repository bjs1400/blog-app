import React from "react";
import { Link } from "react-router-dom";

const LoginButton = props => {
  return (
    <Link to="/login" className="item ui teal button">
      Login
    </Link>
  );
};

export default LoginButton;
