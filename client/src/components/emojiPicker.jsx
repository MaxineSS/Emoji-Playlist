import React from 'react'
import Comment from './comment.jsx'
import { e_valence, e_danceability, e_energy, e_instrumentalness } from './../../../database/emojis.js'

class EmojiPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      valence: 0,
      valence_url: e_valence[9].url,
      energy: 0,
      energy_url: e_energy[1].url,
      danceability: 0,
      danceability_url: e_danceability[1].url,
      instrumentalness: 0,
      instrumentalness_url: e_instrumentalness[1].url
    }
  }

  findUrl(entities, value) {
    const emoji = entities.find((item) => item.id === Number(value))
    const description = emoji.description;
    const url = emoji.url;
    return [url, description];
  }
  handleInputChange(e) {
    const name = e.target.name
    switch (name) {
      case 'valence':
        this.setState({
          comments: this.findUrl(e_valence, e.target.value)[1],
          valence: e.target.value,
          valence_url: this.findUrl(e_valence, e.target.value)[0]
        })
        break;
      case 'energy':
        this.setState({
          energy: e.target.value,
          energy_url: this.findUrl(e_energy, e.target.value)[0]
        })
        break;
      case 'danceability':
        this.setState({
          danceability: e.target.value,
          danceability_url: this.findUrl(e_danceability, e.target.value)[0]
        })
        break;
      case 'instrumentalness':
        this.setState({
          instrumentalness: e.target.value,
          instrumentalness_url: this.findUrl(e_instrumentalness, e.target.value)[0]
        })
    }
  }

  render() {
    const { comments } = this.state
    const { valence, valence_url } = this.state
    const { energy, energy_url } = this.state
    const { danceability, danceability_url } = this.state
    const { instrumentalness, instrumentalness_url } = this.state
    return (
      <div>
        <div className="range-input">
          <input name="valence" type="range" min="0.1" max="1.0" value={valence}
            onChange={this.handleInputChange.bind(this)} step="0.1" />
          <span className="emoji">
            <img src={valence_url} />
          </span>

          <input name="danceability" type="range" min="0.0" max="1.0" value={danceability}
            onChange={this.handleInputChange.bind(this)}  step="0.5" />
          <span className="emoji">
            <img src={danceability_url} />
          </span>

          <input name="instrumentalness" type="range" min="0.0" max="1.0" value={instrumentalness}
            onChange={this.handleInputChange.bind(this)}  step="0.5" />
          <span className="emoji">
            <img src={instrumentalness_url} />
          </span>

          <input name="energy" type="range" min="0.0" max="1.0" value={energy}
            onChange={this.handleInputChange.bind(this)} step="0.25" />
          <span className="emoji">
            <img src={energy_url} />
          </span>
        </div>
        <div className="get-recoms">
          <button onClick={() => this.props.handleSubmit({ valence, energy, danceability, instrumentalness })}>Submit</button>
        </div>
        <Comment comments={comments} />
      </div>
    )
  }

}

export default EmojiPicker