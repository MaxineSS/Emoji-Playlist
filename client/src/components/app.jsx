import React from 'react'
import EmojiPicker from './emojiPicker.jsx'
import Playlist from './playlist.jsx'
import Comment from './comment.jsx'
import Login from './Login.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      reco_playlist: [],
      saved_playlist: []
    }
  }
  clearSaved() {
    this.setState({
      saved_playlist: []
    })
  }
  clearReco() {
    this.setState({
      reco_playlist: []
    })
  }
  handleSubmit(feeling) {
    const config = {
      url: '/recommendations',
      method: 'post',
      data: feeling,
      baseURL: 'http://localhost:4000/',
      responseType: 'json'
    }
    axios.request(config)
      .then((result) => {
        this.setState({
          reco_playlist: result.data
        })
      })
      .catch(error => console.log(error))
  }
  handleAddPlaylist(likedPlaylist) {
    axios.post('http://localhost:4000/playlists', {
      data: likedPlaylist
    })
      .then(this.clearReco.bind(this))
    .catch(error => console.log(error))
  }
  handleGetPlaylist () {
    axios.get('http://localhost:4000/playlists', {
      responseType: 'json'
    })
    .then((list) => {
      this.setState({
        saved_playlist: list.data
      })
    })
    .catch((error) => console.log(error))
  }
  render() {
    const { reco_playlist, saved_playlist, clearSaved } = this.state
    return (
      <>
        <div className="app">
          <div className="left-section">
            <div>How are you feeling now?</div>
            <EmojiPicker handleSubmit={this.handleSubmit.bind(this)} />
          </div>
          <div className="right-section">
            <Comment />
            <Playlist reco_playlist={reco_playlist} saved_playlist={saved_playlist}
              clearSaved={this.clearSaved.bind(this)}
              handleAddPlaylist={this.handleAddPlaylist.bind(this)} handleGetPlaylist={this.handleGetPlaylist.bind(this)} />
          </div>
        </div>
      </>
    )
  }
}

export default App