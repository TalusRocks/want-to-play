const model = require('../models/game-models')

function getAllGames(req, res, next){
  model.getAllGames().then(games => {
    res.json(games)
  })
}

module.exports = { getAllGames }
