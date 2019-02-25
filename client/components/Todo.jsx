import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { sendTodo } from "../actions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      priority: null,
      category: "",
      is_complete: null,
      due_at: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.dispatch(sendTodo(this.state));
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <h1>Enter a new Todo:</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            name="task"
            onChange={this.handleChange}
            label="Task"
          />
          <br />
          <TextField
            type="number"
            name="priority"
            onChange={this.handleChange}
            label="Priority 1 - 5"
          />
          <br />
          <TextField
            type="text"
            name="category"
            onChange={this.handleChange}
            label="Category"
          />
          <br />
          <TextField
            type="text"
            name="is_complete"
            onChange={this.handleChange}
            label="Complete?"
          />
          <br />
          <TextField
            type="date"
            name="due_at"
            onChange={this.handleChange}
            label=""
          />
          <br />
          <Button
            variant="outlined"
            color="secondary"
            onSubmit={this.handleSubmit}
          >
            Add Todo!
          </Button>
        </form>
      </Fragment>
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
)(Todo);
