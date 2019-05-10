import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import Users from "../api/users";

class Signup extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.usernameSU).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.passwordSU).value.trim();

    Meteor.call("users.insert", { username, password }); // attempt to sign up the user
  };

  render() {
    return (
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui image header">
            <div class="content">Signup Below</div>
          </h2>
          <form onSubmit={this.handleSubmit} class="ui large form">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon">::before</i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    ref="usernameSU"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon">::before</i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref="passwordSU"
                  />
                </div>
              </div>
              <div class="ui fluid large submit blue button">Signup</div>
              ::after
            </div>
          </form>
          <div class="ui message">
            Already have an account?
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
