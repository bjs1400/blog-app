import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import history from "../";

class Login extends React.Component {
  state = {
    errorMessage: "" // set initial error message
  };

  handleSubmit = () => {
    event.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    Meteor.loginWithPassword(username, password, err => {
      if (err) {
        this.setState({ errorMessage: err.reason }); // error message to be displayed to the user
      }
      history.push("/blog");
    });
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">Log-in to your account</div>
          </h2>
          <form onSubmit={this.handleSubmit} className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon">::before</i>
                  <input type="text" name="username" placeholder="Username" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon">::before</i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="ui fluid large teal submit button">Login</div>
              ::after
            </div>
            <div className="ui error message">
              <div className="header">{this.state.errorMessage}</div>
            </div>
          </form>
          <div className="ui message">
            New here?
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
