
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('games_tags').insert([
        {game_id: 1 , tag_id: 1},
        {game_id: 2 , tag_id: 1},
        {game_id: 2 , tag_id: 2},
        {game_id: 3 , tag_id: 3},
        {game_id: 4 , tag_id: 4},
        {game_id: 5 , tag_id: 1},
        {game_id: 5 , tag_id: 2},
        {game_id: 5 , tag_id: 4},
        {game_id: 5 , tag_id: 5}
      ])
    })
}
