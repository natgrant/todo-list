import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Checkbox } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [0]
    };
  }

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

  render() {
    let { todos } = this.props;
    return (
      <div>
        <List>
          {todos.map(todo => {
            return (
              <ListItem key={todo} button onClick={this.handleToggle(todo)}>
                <Checkbox
                  checked={this.state.checked.indexOf(todo) !== -1}
                  tabIndex={-1}
                />
                <ListItemText primary={todo.task} />
                <ListItemSecondaryAction>
                  <Link to="/edit">
                    <IconButton>
                      <i class="far fa-edit" />
                    </IconButton>
                  </Link>
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

export default connect(
  mapStateToProps,
  null
)(Home);
