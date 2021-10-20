import React from 'react'
import Track from './track.jsx'

const Playlist = (props) => {
  return (
    <>
      <div className="reco-add-get">
        <button onClick={() => props.clearSaved() }>Current Playlist</button>
        <button onClick={() => props.handleAddPlaylist(props.reco_playlist)}>Add Current Playlist</button>
        <button onClick={() => props.handleGetPlaylist()}>Liked Playlist</button>
      </div>
      {(!props.saved_playlist.length) ? (
        <div className="playlist">
          {props.reco_playlist.map((track, i) => <Track className="recos" key={i} track={track} />)}
        </div>
      ) : (
        <div className="playlist">
          {props.saved_playlist.map((track, i) => <Track className="saved" key={i} track={track} />)}
        </div>
      )}
    </>
  )
}

export default Playlist
