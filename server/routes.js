const emojiList = require('../database/emojis.js')
const fetchData = require('../api/browse.js')
const db = require('../database/index.js')

module.exports = {
  createRecommendation: (req, res) => {
    const entities = req.body
    const feeling = {
      danceability: entities.danceability,
      instrumentalness: entities.instrumentalness,
      valence: entities.valence,
      energy: entities.target_energy
    }
    // request GET to spotify
    fetchData(feeling)
      .then((recommendation) => res.status(200).send(recommendation))
      .catch(error => console.log(error))
  },
  getPlaylists: (req, res) => {
    // read from database
    db.read()
      .then(result => res.status(200).send(result))
      .catch(error => console.log(error))
  },
  addPlaylist: (req, res) => {
    // write to database
    db.create(req.body.data, () => {
      res.status(201).send('Added current playlist to DB')
    })
  },
  getTracks: (req, res) => {
    // read from database
  },
  addTrack: (req, res) => {
    // write to database
  }
}