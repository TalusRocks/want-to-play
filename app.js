const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

const gamesRouter = require('./src/routes/game-routes')
app.use('/games', gamesRouter)

const tagsRouter = require('./src/routes/tag-routes')
app.use('/tags', tagsRouter)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || "Sorry, something went wrong."
  res.status(status).json({error: {message}})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: "Sorry, could not find that."}})
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app
