import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Todo from "./Todo";
import Header from "./Header";
import Navbar from "./Navbar";
import Complete from "./Complete";

import { getTodos } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/:username/todo" component={Todo} />
          <Route path="/completed" component={Complete} />
          <Route path="/priority/:priority" component={Home} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
