import request from "superagent";

export function getTodos() {
  return request.get("/api/v1/todos").then(res => res.body);
}

export function sendTodo(todo, username) {
  return request
    .post("/api/v1/todos/" + username)
    .send(todo)
    .then(res => res.body);
}

export function deleteTodo(id) {
  return request.delete(`/api/v1/todos/delete/${id}`).then(res => res.body);
}

export function editTodo(id, formData) {
  return request
    .post(`/api/v1/todos/edit/${id}`, formData)
    .then(res => res.body);
}
