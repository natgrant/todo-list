import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      priority: this.props.priority,
      complete: this.props.is_complete,
      category: this.props.category,
      due: new Date()
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("task", this.state.task);
    formData.append("priority", this.state.priority);
    formData.append("is_complete", this.state.complete);
    formData.append("category", this.state.category);
    formData.append("due", this.state.due_at);
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeDate = date => this.setState({ date });

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label">Task Name</label>
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
                <option />
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="complete"
                  defaultValue={this.props.is_complete}
                  onChange={this.handleChange}
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="complete"
                  defaultValue={this.props.is_complete}
                  onChange={this.handleChange}
                />
                No
              </label>
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
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
            <label className="label">Due </label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="due"
                onChange={this.handleChange}
                defaultValue={this.state.date}
              />
            </div>
          </div>
          <button className="button is-secondary is-outlined" type="submit">
            Change Todo
          </button>
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
)(EditForm);
