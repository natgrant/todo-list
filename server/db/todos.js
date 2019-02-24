const connection = require("./connection");

function getAll(testDB) {
  const db = testDB || connection;
  return db("todos");
}

// Will need user ID eventually
function createTodo(todo, testDB) {
  const db = testDB || connection;

  return db("todo").insert(todo);
}

module.exports = {
  getAll,
  createTodo
};
