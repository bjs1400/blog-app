import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import Users from "../api/users";
import Posts from "../api/blogposts";

class BlogCreate extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const title = ReactDOM.findDOMNode(this.refs.createTitle).value.trim();
    const description = ReactDOM.findDOMNode(
      this.refs.createDescription
    ).value.trim();
    // call create blog post method
    Meteor.call("posts.insert", { title, description });
  };

  // only rendered if user is an admin
  render() {
    if (Roles.userIsInRole(Meteor.user(), ["admin"])) {
      return (
        <form className="new-post" onSubmit={this.handleSubmit}>
          <input type="text" ref="createTitle" />
          <input type="text" ref="createDescription" />
        </form>
      );
    } else {
      return <div>Access Denied</div>;
    }
  }
}

export default BlogCreate;
