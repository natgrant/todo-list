import React, { Component } from "react";
import { connect } from "react-redux";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => {
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
)(Home);
