import React from "react";

class LogoutButton extends React.Component {
  handleClick = () => {
    // log the user out
  };

  render() {
    return (
      <button onClick={this.handleClick} className="item ui red button">
        Logout
      </button>
    );
  }
}

export default LogoutButton;
