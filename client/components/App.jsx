import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Todo from "./Todo";
import { getTodos } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    console.log(Home);
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/:username/todo" component={Todo} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
