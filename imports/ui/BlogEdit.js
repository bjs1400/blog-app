import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import Users from "../api/users";
import Posts from "../api/blogposts";

class BlogEdit extends Component {
  state = {
    title: "",
    description: " "
  };
  //fetch the blog post containing the id in params & set that in a state title & description
  componentDidMount() {
    Meteor.call("post.fetch", params.id.something, (err, result) => {
      // ** FIX THIS params thing
      this.setState({
        title: result.title,
        description: result.description
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const title = ReactDOM.findDOMNode(this.refs.title).value.trim();
    const description = ReactDOM.findDOMNode(
      this.refs.description
    ).value.trim();
    // call create blog post method
    Meteor.call("posts.update", { title, description, id: {} });
  };

  // only rendered if user is an admin
  render() {
    if (Roles.userIsInRole(Meteor.user(), ["admin"])) {
      return (
        <form className="new-post" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" value={this.state.title} />
          <input type="text" ref="description" value={this.state.description} />
        </form>
      );
    } else {
      return <div>Access Denied</div>;
    }
  }
}

export default BlogEdit;
