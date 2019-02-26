exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 100,
          task: "Water herb garden",
          user_id: 1,
          priority: 3,
          category: "Todo",
          is_complete: false,
          due_at: 1551048622545
        },
        {
          id: 101,
          task: "Feed Mr Mittens",
          user_id: 2,
          priority: 5,
          category: "Todo",
          is_complete: true,
          due_at: 1551048622545
        },
        {
          id: 103,
          task: "Code",
          user_id: 2,
          priority: 5,
          category: "Done",
          is_complete: true,
          due_at: 1551048622545
        },
        {
          id: 104,
          task: "Sleep",
          user_id: 2,
          priority: 5,
          category: "Todo",
          is_complete: false,
          due_at: 1551048622545
        }
      ]);
    });
};
