
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games_tags').del()
    // remember that these can be shortened if you're returning
    .then(() => knex('tags').del())
    .then(() => knex('games').del())

}
