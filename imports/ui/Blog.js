import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

import Users from "../api/users";
import Posts from "../api/blogposts";

// displays list of current blog posts

class Blog extends Component {
  renderList = () => {
    return this.props.posts.map(post => (
      <RenderItem title={post.title} description={post.description} />
    ));
  };

  renderCreate() {
    // Create new post button
    if (this.props.users.isAdmin) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to={"/post/new"} className="ui button primary">
            New Post
          </Link>
        </div>
      );
    }
  }

  render() {
    if (!this.props.posts) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Bar />
        <div class="ui relaxed divided list">
          {this.renderList()}
          {this.renderCreate()}
        </div>
      </>
    );
  }
}

export default withTracker(() => {
  return {
    users: Users.find({}).fetch(), // need to map over this & list each blog post
    posts: Posts.find({}).fetch()
  };
})(Blog);
