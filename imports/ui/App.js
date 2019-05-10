import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";

import Signup from "./Signup";
import Login from "./Login";
import Blog from "./Blog";
import BlogCreate from "./BlogCreate";
import BlogEdit from "./BlogEdit";
import BlogShow from "./BlogShow";
import AllUsers from "./AllUsers";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/signup" component={Signup} /> :)
            <Router path="/login" component={Login} />
            <Router path="/blog" component={Blog} />
            <Router path="/blog/:id" component={BlogShow} />
            <Router path="/post/new" component={BlogCreate} />
            <Router path="/post/edit/:id" component={BlogEdit} />
            <Router path="/admin/user" component={AllUsers} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
