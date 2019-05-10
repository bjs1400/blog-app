import React, { Component } from "react";

class BlogShow extends Component {
  blogid = this.props.id; // id of the blog we want to show
  //fetch that particular blog post from the database using this.props.match.params.id

  // render the blog post
  render() {
    return <div>Blog Show</div>;
  }
}

export default BlogShow;
