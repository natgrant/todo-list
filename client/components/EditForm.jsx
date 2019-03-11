import React, { Component, Fragment } from "react";

import { Select, MenuItem, Button, TextField } from "@material-ui/core";

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      priority: "",
      is_complete: "no",
      category: "",
      due: ""
    };
  }
  render() {
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
            <Select
              type="text"
              name="is_complete"
              onChange={this.handleChange}
              value={this.state.is_complete}
              label="Complete?"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
            <br />
            <TextField
              type="date"
              name="due_at"
              onChange={this.handleChange}
              label=""
            />
            <br />
            <Button id="button-add-todo" variant="outlined" color="secondary">
              Change Todo
            </Button>
          </form>
        </div>
      </Fragment>
    );
  }
}
