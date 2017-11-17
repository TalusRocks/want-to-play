const model = require('../models/tag-models')

function getAllTags(req, res, next){
  model.getAllTags().then(tags => {
    res.json(tags)
  })
}

module.exports = { getAllTags }
