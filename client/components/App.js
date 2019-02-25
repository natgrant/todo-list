import React, { Component } from "react";
import { connect } from "react-redux";

import { getTodos } from "../actions";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return <li>{todo.task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
