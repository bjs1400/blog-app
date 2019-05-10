import React from "react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <Link to="/signup" className="ui button">
      Signup
    </Link>
  );
};

export default SignupButton;
