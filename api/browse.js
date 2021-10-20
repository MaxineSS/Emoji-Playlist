const axios = require('axios')
const seedList = require('../database/seed.js')
require('dotenv').config()

const seed = {
  artists: seedList.artists[Math.floor(Math.random() * 5)].id,
  genres: seedList.genres[Math.floor(Math.random() * seedList.genres.length)],
  tracks: seedList.tracks[Math.floor(Math.random() * 5)].id
}
const config = {
  url: process.env.SPOTIFY_API_AUTH,
  method: 'post',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  params: {
    grant_type: 'client_credentials'
  }
}

module.exports = function fetchData(feeling) {
  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then(({ data }) => {
        const token = data.access_token
        const config = {
          url: '/recommendations',
          method: 'get',
          params: {
            limit: 10,
            seed_artists: seed.artists,
            seed_genres: seed.genres,
            seed_tracks: seed.tracks,
            target_danceability: feeling.danceability,
            target_instrumentalness: feeling.instrumentalness,
            target_valence: feeling.valence,
            target_energy: feeling.energy
          },
          baseURL: 'https://api.spotify.com/v1',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          responseType: 'application/json'
        }
        axios
          .request(config)
          .then(({ data }) => {
            const tracks = data.tracks
            resolve(tracks)
          })
          .catch((error) => reject(error))
      })
      .catch(error => console.log(error))
  })
}
