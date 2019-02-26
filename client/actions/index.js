import { getTodos as apiGetTodos, sendTodo as apiSendTodo } from "../api/todos";

export const getTodos = () => {
  return dispatch => {
    return apiGetTodos().then(todos => {
      dispatch(saveTodos(todos));
    });
  };
};

export const saveTodos = todos => {
  return {
    type: "SAVE_TODOS",
    todos: todos
  };
};

export const sendTodo = (todo, username) => {
  return dispatch => {
    return apiSendTodo(todo, username).then(result => {
      dispatch(getTodos());
    });
  };
};
