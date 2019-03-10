import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import { deleteTodo } from "../actions";
import EditTodo from "./EditTodo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [0],
      isVisible: false
    };
  }

  deleteTodo = e => {
    this.props.deleteTodo(e.target.value);
  };

  handleToggle = todo => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  handleChange = () => {
    this.setState({
      isVisible: false
    });
  };

  handleClick = () => {
    this.setState({
      isVisible: true
    });
  };

  render() {
    let { todos } = this.props;
    return (
      <div>
        <List>
          {todos.map(todo => {
            return (
              <ListItem key={todo.id} button onClick={this.handleToggle(todo)}>
                <Checkbox
                  checked={this.state.checked.indexOf(todo) !== -1}
                  tabIndex={-1}
                />
                <ListItemText primary={todo.task} />
                <ListItemSecondaryAction>
                  <a
                    className="button is-rounded is-warning"
                    onClick={this.handleClick}
                  >
                    <i className="far fa-edit" />
                  </a>
                  {this.state.isVisible && (
                    <EditTodo {...this.props} buttonClick={this.handleChange} />
                  )}
                  <a
                    className="button is-rounded is-danger"
                    name="todos"
                    value={todo.id}
                    onClick={this.deleteTodo}
                  >
                    <i className="fas fa-trash-alt" />
                  </a>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
