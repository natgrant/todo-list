import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { sendTodo } from "../actions";

import { Select, MenuItem, Button, TextField } from "@material-ui/core";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      priority: "",
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
    this.props.dispatch(sendTodo(this.state, this.props.match.params));
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <div className="tile is-parent is-half">
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              name="task"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              label="Task"
            />
            <br />
            <Select
              type="number"
              name="priority"
              onChange={this.handleChange}
              value={this.state.priority}
              label="Priority"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
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
            <Button id="button-add-todo" variant="outlined" color="secondary">
              Add Todo
            </Button>
          </form>
        </div>
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
