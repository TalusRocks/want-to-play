const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/game-controllers')

router.get('/', gameCtrl.getAllGamesWithTags)
// router.get('/tags', gameCtrl.getAllGamesWithTags)
router.get('/:gameId', gameCtrl.exists, gameCtrl.getOneGame)
// router.get('/:gameId/tags', gameCtrl.exists, gameCtrl.getAllGamesWithTags)
router.post('/', gameCtrl.prune, gameCtrl.completeFields, gameCtrl.createGame)
router.put('/:gameId', gameCtrl.exists, gameCtrl.prune, gameCtrl.completeFields, gameCtrl.editGame)
router.delete('/:gameId', gameCtrl.exists, gameCtrl.deleteGame)

module.exports = router
