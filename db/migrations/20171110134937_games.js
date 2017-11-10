
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.integer('interest').notNullable().defaultTo(0)
    table.integer('minPlayer').notNullable().defaultTo(0)
    table.integer('maxPlayer').notNullable().defaultTo(0)
    table.integer('minTime').notNullable().defaultTo(0)
    table.integer('maxTime').notNullable().defaultTo(0)
    table.float('ratingBGG', 2).notNullable().defaultTo(0)
    table.float('weightBGG', 2).notNullable().defaultTo(0)
    table.text('notes').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
