const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/game-controllers')

router.get('/', gameCtrl.getAllGames)
router.get('/:gameId', gameCtrl.exists, gameCtrl.getOneGame)
router.post('/', gameCtrl.prune, gameCtrl.completeFields, gameCtrl.createGame)
router.put('/:gameId', gameCtrl.exists, gameCtrl.prune, gameCtrl.completeFields, gameCtrl.editGame)
router.delete('/:gameId', gameCtrl.exists, gameCtrl.deleteGame)

module.exports = router
