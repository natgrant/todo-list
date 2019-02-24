exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 1,
          task: "Water herb garden",
          priority: 3,
          category: "Todo",
          is_complete: false,
          due_at: 1551048622545
        }
      ]);
    });
};
