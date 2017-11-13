
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games_tags', table => {
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('games')
    table.integer('tag_id')
    table.foreign('tag_id').references('id').inTable('tags')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games_tags')
}
