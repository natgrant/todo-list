const connection = require("./connection");

function getAll(testDB) {
  const db = testDB || connection;

  return db("todos")
    .join("users", "todos.user_id", "users.id")
    .select("*", "todos.id AS id")
    .then(todos => {
      return todos.map(todo => {
        todo.user = {
          id: todo.user_id,
          username: todo.username
        };

        delete todo.user_id;
        delete todo.username;

        return todo;
      });
    });
}

function createTodo(todo, testDB) {
  const db = testDB || connection;

  return db("todo").insert(todo);
}

function getByUsername(username, testDB) {
  const db = testDB || connection;

  return db("users")
    .where("username", username)
    .first()
    .then(user => {
      return db("todos")
        .where("user_id", user.id)
        .then(todos => {
          return todos.map(todo => {
            todo.user = {
              id: todo.user_id,
              username: user.username
            };

            delete todo.user_id;

            return todo;
          });
        });
    });
}

module.exports = {
  getAll,
  createTodo,
  getByUsername
};
