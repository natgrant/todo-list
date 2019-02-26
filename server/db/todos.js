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

  return db("users")
    .where("username", todo.username)
    .first()
    .then(user => {
      const newTodo = {
        task: todo.task,
        priority: todo.priority,
        user_id: user.id,
        category: todo.category,
        is_complete: todo.is_complete,
        due_at: todo.due_at
      };
      return db("todos").insert(newTodo);
    });
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

function getByPriority(priority, testDB) {
  const db = testDB || connection;

  return db("todos").where("priority", priority);
}

function getByCategory(category, testDB) {
  const db = testDB || connection;

  return db("todos").where("category", category);
}

function isComplete(is_complete, testDB) {
  const db = testDB || connection;

  return db("todos").where("is_complete", is_complete);
}

function deleteTodo(id, testDB) {
  const db = testDB || connection;

  return db("todos")
    .where({ id })
    .del()
    .then(todos => {
      return db("todos").select();
    });
}

function editTodo(todo, testDB) {
  const db = testDB || connection;
  return db("todos")
    .where({ id: 103 })
    .first()
    .update({
      task: todo.task,
      priority: todo.priority,
      category: todo.category,
      is_complete: todo.is_complete,
      due_at: todo.due_at
    })
    .then(result => {
      return db("todos").where({ id: 103 });
    });
}

module.exports = {
  getAll,
  createTodo,
  getByUsername,
  getByPriority,
  getByCategory,
  isComplete,
  deleteTodo,
  editTodo
};
