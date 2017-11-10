const model = require('../models/game-models')

function getAllGames(req, res, next){
  model.getAllGames().then(games => {
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
    res.status(200).json(game)
  })
}

function deleteGame(req, res, next){
  model.deleteGame(req.params.gameId).then(game => {
    res.json(game)
  })
}

module.exports = { getAllGames, getOneGame, createGame, editGame, deleteGame }
