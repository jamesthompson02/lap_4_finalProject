import React from "react";
import { Link } from "react-router-dom";
import { PlaylistContent } from "../../components";
import { useSelector } from "react-redux";
import "./PlaylistPage.css";

const PlaylistPage = () => {
  // playlist to get from reducer
  const playlist = useSelector((state) => state.playlist.playlist);
  const user = useSelector((state) => state.registeredUser.user);

  if (playlist.length < 1) {
    return (
      <main className="playlist-section playlist-section-center">
        <div className="playlist-container">
          <h3 className="playlist-title">Hi {user || "unknown"} </h3>
          <h3 className="playlist-title">
            You do not have any songs in your playlist...
          </h3>
          <h3 className="playlist-title last">Start adding songs ?</h3>

          <Link to="/dashboard" className="playlist-btn">
            Add songs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="playlist-section playlist-section-center">
        {/* #Put the content of the playlist here  */}
        <h3 className="playlist-title">Your library</h3>
        <PlaylistContent />
      </section>
    </main>
  );
};

export default PlaylistPage;
