import { editTodo as apiEditTodo } from "../api/todos";

export const editTodoAction = id => {
  return dispatch => {
    return apiEditTodo(id).then(result => {
      dispatch(getTodos());
    });
  };
};
