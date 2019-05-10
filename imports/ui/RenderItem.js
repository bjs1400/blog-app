import React, { Component } from "react";
import { Link } from "react-router-dom";

// Render a single blog post or item
const RenderItem = props => {
  return (
    <div class="item">
      <div class="content">
        <Link to={`/blog/${this.props.blogID}`} class="header">
          {this.props.title}
        </Link>
        <div class="description">{this.props.description}</div>
      </div>
    </div>
  );
};

export default RenderItem;
