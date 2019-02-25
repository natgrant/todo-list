exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Detective Inspector Mittens",
          hash: "098f6bcd4621d373cade4e832627b4f6"
        },
        {
          id: 2,
          username: "Murray",
          hash: "098f6bcd4621d373cade4e832627b4f6"
        }
      ]);
    });
};
