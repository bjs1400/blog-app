import React from "react";

class BlogEdit extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const title = ReactDOM.findDOMNode(this.refs.title).value.trim();
    const description = ReactDOM.findDOMNode(
      this.refs.description
    ).value.trim();

    Meteor.call("posts.edit", { title, description });
  };

  render() {
    return <div>BlogEdit</div>;
  }
}

export default BlogEdit;
