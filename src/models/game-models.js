const knex = require('../../db/connection')

function getAllGames() {
  return knex('games')
}

function getOneGame(id) {
  return knex('games').where({ id }).first()
}

function createGame(body) {
  return knex('games')
    .insert(body)
    .returning('*')
    .then(([game]) =>  game)
}

function editGame(id, body) {
  return knex('games')
    .update(body)
    .where({ id })
    .returning('*')
    .then(([game]) => game)
}

function deleteGame(id) {
  return knex('games')
    .del()
    .where({ id })
    .returning('*')
    .then(([game]) => game)
}

module.exports = { getAllGames, getOneGame, createGame, editGame, deleteGame }
