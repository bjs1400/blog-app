import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

import blogposts from "../api/blogposts";

class BlogShow extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    this.fetchBlog();
  }

  fetchBlog = () => {
    blogId = this.props.match.params.id; // id of the blog we want to show
    Meteor.call("post.fetch", blogId, (err, result) => {
      if (err) {
        history.push("/errorPage");
      } else {
        this.setState({ post: result }); // result must be something ughh array or object??
      }
    });
  };

  // render the blog post
  render() {
    return (
      <div className="ui items">
        <div className="item">
          <div className="content">
            <a className="header">{this.state.post.title}}</a>
            <div className="description">
              <p>{this.state.post.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogShow;
