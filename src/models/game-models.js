const knex = require('../../db/connection')

function getAllGames() {
  return knex('games')
}

function getAllGamesWithTags() {
  return knex('games')
    .then(games => {
      const promises = games.map(game => {
        return tagsByGameId(game.id)
          .then(tags => {
            game.tags = tags
            return game
          })
      })
      return Promise.all(promises)
    })
}

function tagsByGameId(id) {
  return knex('tags')
    .select('tags.*')
    .innerJoin('games_tags', 'games_tags.tag_id', 'tags.id')
    .innerJoin('games', 'games_tags.game_id', 'games.id')
    .where('games.id', id)
}

// function getOneGameWithTags(id) {
//   //get single game by id WITH tags
//   return knex('games')
//     .where('games.id', id)
//     .then(game => {
//       return tagsByGameId(game.id)
//       .then(tags => {
//         game.tags = tags
//         return game
//       })
//     })
// }



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

module.exports = { getAllGames, getAllGamesWithTags, getOneGame, createGame, editGame, deleteGame, tagsByGameId }
