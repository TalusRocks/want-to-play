const knex = require('../../db/connection')

function getAllGames() {
  return knex('games')
}

module.exports = { getAllGames }
