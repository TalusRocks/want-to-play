const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/game-controllers')

router.get('/', gameCtrl.getAllGames)

module.exports = router
