import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import Users from "../api/users";
import LogoutButton from "./LogoutButton";
import Login from "./Login";
import LoginButton from "./LoginButton";
import { Meteor } from "meteor/meteor";

import users from "../api/users";

class Bar extends React.Component {
  state = {
    user: null
  };

  componentWillMount() {
    const user = Meteor.call("user.fetch", Meteor.userId()); // **FIX THIS **
    this.setState({});
  }

  render() {
    if (!notAvail) {
      return (
        <div className="ui fixed inverted menu">
          <div className="ui container">
            {this.props.users.currentUser ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  const usersSub = Meteor.subscribe("users");
  const notAvail = !usersSub.ready();
})(AllUsers);
