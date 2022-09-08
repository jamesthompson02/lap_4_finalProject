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
      {playlist &&
        playlist.map((item) => {
          return (
            <div className="card-container" key={item.id}>
              <div className="image-container">
                <img className="img1" src={item.albumArtUrl} alt="albumart" />
              </div>
              <div className="card-content">
                <div className="song-title">
                  <h2>{item.title}</h2>
                </div>
                <div className="song-artist">
                  <h4>{item.artist}</h4>
                </div>
                <div className="Album">
                  <h3>{item.album}</h3>
                </div>
              </div>
              <button
                className="playlist-btn"
                onClick={() => dispatch(removeSong(item.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      <hr />
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
