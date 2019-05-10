import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

import LoginButton from "../ui/LoginButton";
import SignupButton from "../ui/SignupButton";

import history from "../history";

import Users from "../api/users";
import Posts from "../api/blogposts";

// displays list of current blog posts

// when this components loads, we need to check if the user is logged in. If NOT, show
// "you do not have permission to view this page". Otherwise, show list of blog posts.
//  only show edit/delete/create buttons if user is an admin

class Blog extends Component {
  state = {
    posts: [],
    user: null
  };

  componentDidMount() {
    // WHICH METHOD?!?!
    this.fetchPosts();
  }

  fetchPosts = () => {
    // fetch our blog posts
    Meteor.call("posts.fetch", (err, res) => {
      if (err) {
        history.push("/errorPage");
      } else {
        this.setState({ posts: result }); // result must be something ughh array or object??
      }
    });
  };

  renderList = () => {
    return this.state.posts.map(post => (
      <RenderItem
        id={post._id}
        title={post.title}
        description={post.description}
      />
    ));
  };

  renderCreate = () => {
    // Create new post button
    if (this.props.users.isAdmin) {
      // FIX THIS AHHHH
      return (
        <div style={{ textAlign: "right" }}>
          <Link to={"/post/new"} className="ui button primary">
            New Post
          </Link>
        </div>
      );
    }
  };

  render() {
    if (loading) {
      return <div>Loading..</div>;
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
    currentUser: Meteor.user() || {}, // default to plain object
    currentUserSub: Meteor.subscribe("currentUser"), // *make this subscription! *
    loading: !currentUserSub.ready() || !Meteor.user()
  };
})(Blog);
