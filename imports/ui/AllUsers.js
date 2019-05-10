import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import users from "../../imports/api/users";

class AllUsers extends React.Component {
  renderList = () => {
    return this.props.users.map(user => <div>{user.username}</div> );
    }
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

export default withTracker(() => {
  return {
    users: Users.find.fetch()
  };
})(AllUsers);
