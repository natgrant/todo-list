import React, { Component, Fragment } from "react";

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      priority: this.props.priority,
      is_complete: this.props.is_complete,
      category: this.props.category,
      due: this.props.due_at
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const formData = newFormData();
    formData.append("task", this.state.task);
    formData.append("priority", this.state.priority);
    formData.append("is_complete", this.state.is_complete);
    formData.append("category", this.state.category);
    formData.append("due", this.state.due_at);
  };

  onChangeDate = date => this.setState({ date });

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label" />
            <div className="control">
              <input
                className="input"
                type="text"
                name="task"
                onChange={this.handleChange}
                defaultValue={this.props.task}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Priority</label>
            <div className="select">
              <select
                name="priority"
                defaultValue={this.props.priority}
                onChange={this.handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="control">
            <label className="radio">
              <input type="radio" name="answer" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="answer" />
              No
            </label>
          </div>
          <div className="field">
            <label className="label" />
            <div className="select">
              <select
                name="category"
                defaultValue={this.props.category}
                onChange={this.handleChange}
              >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label" />
            <div className="control">
              <input
                className="input"
                type="date"
                name="due"
                onChange={this.handleChange}
                defaultValue={this.props.date}
              />
            </div>
          </div>
          <a variant="outlined" color="is-secondary" type="submit">
            Change Todo
          </a>
        </form>
      </Fragment>
    );
  }
}
