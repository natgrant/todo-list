exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", table => {
    table.increments("id");
    table.string("task");
    table.integer("priority");
    table.string("category");
    table.boolean("is_complete");
    table.time("due_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("todos");
};
