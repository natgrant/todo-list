import { editTodo as apiEditTodo } from "../api/todos";

export const editTodo = FormData => {
  return dispatch => {
    return apiDeleteTodo(FormData).then(result => {
      dispatch(getTodos());
    });
  };
};
