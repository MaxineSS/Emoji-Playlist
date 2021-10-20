import React from 'react'

const Track = ({ track }) => {
  return (
    <div className="track">
      {(track.hasOwnProperty('_id')) ? (
        <>
        <div className = "info">
          <div><b>Title</b></div>
          <div>{track.title}</div>
          <div><b>Artist</b></div>
          <div>{track.artists}</div>
          <div><b>Album</b></div>
          <div>{track.album}</div>
          <div><b>Popularity</b> {track.popularity}</div>
        </div>
        <div className="player">
          <img src={track.images} />
          <audio controls type="audio" src={track.preview_url}></audio>
        </div>
        </>
      ) : (
        <>
        <div className="info">
        <div><b>Title</b></div>
        <div>{track.name}</div>
        <div><b>Artist</b></div>
        <div>{track.artists[0].name}</div>
        <div><b>Album</b></div>
        <div>{track.album.name}</div>
        <div><b>Popularity</b> {track.popularity}</div>
        </div>
        <div className="player">
          <img src={track.album.images[0].url} />
          <audio controls type="audio" src={track.preview_url}></audio>
        </div>
        </>
        )}
    </div>
  )
}

export default Track
