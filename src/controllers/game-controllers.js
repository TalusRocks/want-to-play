const model = require('../models/game-models')
// Hm... I wonder if it'd be worthwhile to put these fields in the model..? :thinking_face:
const requiredFields = ['name', 'interest', 'minPlayer', 'maxPlayer', 'minTime', 'maxTime']
const pruneFields = ['name', 'interest', 'minPlayer', 'maxPlayer', 'minTime', 'maxTime', 'ratingBGG', 'weightBGG', 'notes', 'tags']

function getAllGames(req, res, next){
  model.getAllGames().then(games => {
    res.json(games)
  })
}

function getAllGamesWithTags(req, res, next){
  model.getAllGamesWithTags().then(games => {
    res.json(games)
  })
}

function tagsByGameId(req, res, next){
  model.tagsByGameId(req.params.gameId).then(games => {
    res.json(games)
  })
}

function getOneGame(req, res, next){
  model.getOneGame(req.params.gameId).then(game => {
    res.json(game)
  })
}

function createGame(req, res, next){
  model.createGame(req.body).then(game => {
    res.status(201).json(game)
  })
}

function editGame(req, res, next){
  model.editGame(req.params.gameId, req.body).then(game => {
    // the status 200 is implicit
    res.status(200).json(game)
  })
}

function deleteGame(req, res, next){
  model.deleteGame(req.params.gameId).then(game => {
    res.json(game)
  })
}

function exists(req, res, next){
  model.getOneGame(req.params.gameId).then(game => {
    if (!game) {
      const status = 404
      const message = `Post with an id of ${req.params.gameId} does not exist`
      return next({ status, message })
    }
  })
  return next()
}

function prune(req, res, next) {
 Object.keys(req.body).forEach(key => {
   if (!pruneFields.includes(key)) delete req.body[key]
 })
 return next()
}

function completeFields(req, res, next){
  const errors = requiredFields.filter(field => !req.body[field])
    .map(key => `${key}`)

  if (errors.length) {
    const status = 400
    const message = `Please complete fields: ${errors.join(', ')}`
    return next({status, message})
  }
  return next()
}

module.exports = { getAllGames, getAllGamesWithTags, getOneGame, createGame, editGame, deleteGame, completeFields, prune, exists, tagsByGameId }
