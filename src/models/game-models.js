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

// Make sure to remove all dead code!

function getOneGame(id) {
  return knex('games').where({ id }).first()
}

// This would be a great time to do some destructuring!
function createGame({
  tags,
  name,
  interest,
  minPlayer,
  maxPlayer,
  minTime,
  maxTime,
  ratingBGG,
  weightBGG,
  notes
}) {
  //tags are coming in with the body, but they're peeled off here
  return knex('games')
    .insert({ name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes }, '*')
    .then(([{ id: newGameId }]) => {
      let gameTags = tags.map((tag) => ({ name: tag }))

      return knex('tags')
        .insert(gameTags, '*')
        .then(allTags => {
          let joinedGameIdTagId = allTags.map(({ id }) => ({ tag_id: id, game_id: newGameId }))
          return knex('games_tags')
            .insert(joinedGameIdTagId, '*')
        })
    })
}

function editGame(id, body) {
  let bodyTags = body.tags
  return knex('games')
    .update({name: body.name,
      interest: body.interest,
      minPlayer: body.minPlayer,
      maxPlayer: body.maxPlayer,
      minTime: body.minTime,
      maxTime: body.maxTime,
      ratingBGG: body.ratingBGG,
      weightBGG: body.weightBGG,
      notes: body.notes}, '*')
    .where({ id })
    .then(([insertedGame]) => {
      let gameTags = bodyTags.map((tag) => {
        return { name: tag }
      })
      return knex('tags')
        .insert(gameTags, '*')
        .where({ id })
        .then(allTags => {
          let joinedGameIdTagId = allTags.map((tagRow) => {
            return {tag_id: tagRow.id, game_id: insertedGame.id}
          })
          return knex('games_tags')
            .insert(joinedGameIdTagId, '*')
        })

    })
}

function deleteGame(id) {
  return knex('games_tags')
    .del()
    .where( 'game_id', id )
    .then(() => {
      return knex('games')
        .del()
        .where({ id })
    })
}

module.exports = { getAllGames, getAllGamesWithTags, getOneGame, createGame, editGame, deleteGame, tagsByGameId }
