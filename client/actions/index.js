import { getTodos as apiGetTodos } from "../api/todos";

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

export const sendTodo = todo => {
  return dispatch => {
    return apiSendTodo(todo).then(result => {});
  };
};
