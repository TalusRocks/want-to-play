const knex = require('../../db/connection')

function getAllTags() {
  return knex('tags')

}

module.exports = { getAllTags }
