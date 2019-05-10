import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import Users from "../api/users";
import LogoutButton from "./LogoutButton";
import Login from "./Login";
import LoginButton from "./LoginButton";
import { Meteor } from "meteor/meteor";

import users from "../api/users";

class Bar extends React.Component {
  componentDidMount() {
    Meteor.call("users.fetch"); // **FIX THIS **
  }

  render() {
    return (
      <div class="ui fixed inverted menu">
        <div class="ui container">
          {this.props.users.currentUser ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    );
  }
}

export default Bar; // subscribe to sign in status
