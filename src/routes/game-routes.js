const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/game-controllers')

router.get('/', gameCtrl.getAllGames)
router.get('/:gameId', gameCtrl.getOneGame)
router.post('/', gameCtrl.createGame)
router.put('/:gameId', gameCtrl.editGame)
router.delete('/:gameId', gameCtrl.deleteGame)

module.exports = router
