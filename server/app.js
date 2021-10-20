const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const Route = require('./routes.js')

require('dotenv').config()
const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/playlists', Route.getPlaylists)
app.post('/playlists', Route.addPlaylist)
app.get('/tracks', Route.getTracks)
app.post('/tracks', Route.addTrack)
app.post('/recommendations', Route.createRecommendation)


app.listen(port, () => console.log(`listening at http://${host}:${port}`))