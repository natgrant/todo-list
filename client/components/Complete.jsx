import React, { Component } from "react";
import { connect } from "react-redux";

import { Checkbox } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { todos } = this.props;
    return (
      <div>
        <List>
          {todos.map(todo => {
            if (todo.is_complete == false) {
              return (
                <ListItem key={todo}>
                  <Checkbox checked="yes" />
                  <ListItemText primary={todo.task} />
                </ListItem>
              );
            }
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
