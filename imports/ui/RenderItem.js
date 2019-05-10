import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";

// Render a single blog post or item
class RenderItem extends React.Component {
  handleDeleteSubmit = () => {
    // call method to delete stream
    Meteor.call("post.delete", this.props.blogId); //
  };

  renderAdmin = id => {
    if (Roles.userIsInRole(Meteor.user(), ["admin"])) {
      // only render if user is an admin
      return (
        <div className="right floated content">
          <Link to={`/blog/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <Button
            onClick={this.handleDeleteSubmit}
            className="ui button negative"
          >
            Delete
          </Button>
        </div>
      );
    }
  };

  render() {
    return (
      <div class="item">
        {this.renderAdmin(this.props.id)}
        {/* ADD ID AS A KEY! */}
        <div class="content">
          <Link to={`/blog/${this.props.blogId}`} class="header">
            {this.props.title}
          </Link>
          <div class="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default RenderItem;
