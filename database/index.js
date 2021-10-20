const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const dbhost = process.env.DB_HOST
const dbport = process.env.DB_PORT
const dbname = process.env.DB_NAME

mongoose.connect(`mongodb://${dbhost}:${dbport}/${dbname}`)
  .then((result) => console.log(`Connected to MongoDB ${result.connections[0].name} Datbase`))
  .catch((error) => console.log(error))

const trackSchema = new mongoose.Schema({
  album: String,
  title: String,
  artists: String,
  popularity: Number,
  preview_url: String,
  images: String
})
const playlistSchema = new mongoose.Schema({
  id: Number,
  name: String,
  tracks: [trackSchema]
})
const recommendationSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  album: String,
  title: String,
  artists: String,
  popularity: Number,
  preview_url: String,
  images: String
})

const Track = mongoose.model('Track', trackSchema)
const Playlist = mongoose.model('Playlist', playlistSchema)
const Recommendation = mongoose.model('Recommendation', recommendationSchema)


module.exports = {
  create: (playlist, cb) => {
    const format = playlist.map(track => {
      return {
        created: new Date,
        album: track.album.name,
        title: track.name,
        artists: track.artists[0].name,
        popularity: track.popularity,
        preview_url: track.preview_url,
        images: track.album.images[0].url
      }
    })
    Recommendation.insertMany(format)
      .then((result) => cb())
      .catch(error => console.log(error))
  },
  read: (playlist) => {
    return new Promise((resolve, reject) => {
      Recommendation.find().sort({ created: -1 })
        .then((query) => resolve(query))
        .catch((error) => reject(error))
    })
  }
}
