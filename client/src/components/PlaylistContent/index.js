import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeSong, clearPlaylist } from "../../actions";
import "./PlaylistContent.css";

const PlaylistContent = () => {
  // where we take the playlist content from the reducer and map to get all the songs
  const playlist = useSelector((state) => state.playlist.playlist);
  const dispatch = useDispatch();

  const handleClearPlaylist = () => {
    dispatch(clearPlaylist());
  };

  return (
    <main className="section section-center">
      
      <div className="grid-container">
      {playlist &&
        playlist.map((item) => {
          return (
            <div className="grid-item">
              <div className="card-container" key={item.id}>
                <div className="image-container">
                  <img className="img1" src={item.albumArtUrl} alt="albumart" />
                </div>
                <div className="card-content">
                  <div className="song-title">
                    <div>{item.title}</div>
                  </div>
                  <div className="song-artist">
                    <div>{item.artist}</div>
                  </div>
                  <div className="Album">
                    <div>{item.album}</div>
                  </div>
                </div>
              </div>
              <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                <button
                  className="playlist-btn"
                  onClick={() => dispatch(removeSong(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <hr style={{ 'margin': '30px 0'}}/>
      <div className="playlist-btn-container">
        <Link to="/dashboard" className="playlist-btn dashboard">
          Back to dashboard
        </Link>
        <button
          type="button"
          className="playlist-btn"
          onClick={handleClearPlaylist}
        >
          Clear Playlist
        </button>
      </div>
    </main>
  );
};

export default PlaylistContent;
