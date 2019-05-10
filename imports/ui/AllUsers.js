import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import users from "../../imports/api/users";

class AllUsers extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    users = Meteor.call("users.fetch");
    this.setState({
      users
    });
  }

  renderList = () => {
    return this.state.users.map(user => {
      <div className="item">
        <div className="content">
          <div className="header">{user.username}</div>
        </div>
      </div>;
    });
  };

  render() {
    if (loading) {
      return <div>Loading...</div>;
    }
    // if admin, render list. otherwise, access denied.
    if (Roles.userIsInRole(Meteor.user(), ["admin"])) {
      return <div className="ui relaxed divided list">{this.renderList()}</div>;
    } else {
      return <div>Access Denied</div>;
    }
  }
}

export default withTracker(() => {
  const usersSub = Meteor.subscribe("users");
  const loading = !usersSub.ready();
})(AllUsers);
