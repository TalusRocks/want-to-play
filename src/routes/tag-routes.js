const express = require('express')
const router = express.Router()
const tagCtrl = require('../controllers/tag-controllers')

router.get('/', tagCtrl.getAllTags)

module.exports = router
