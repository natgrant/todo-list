exports.up = knex =>
  knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("username").unique();
    table.binary("hash");
  });

exports.down = knex => knex.schema.dropTable("users");
