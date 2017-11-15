
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games_tags').del()
    .then(() => {
      return knex('tags').del()
    })
    .then(() => {
      return knex('games').del()
    })

}
