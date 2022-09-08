import react from "react";
import "./style.css"; //
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateArtist,
  updateGenres,
  updateTrack,
  updateArtistSpotifyURI,
  updateTrackSpotifyURI,
  updateFromLanguage,
  updateToLanguage,
  updateAlbumName,
  updateAlbumUrl,
} from "../../actions";
import AddToPlayList from "../AddToPlayList";


function SongCard({ title, artist, albumArtUrl, album }) {
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const albumName = useSelector((state) => state.search.albumName);
  const albumUrl = useSelector((state) => state.search.albumArtUrl);
  const artistNameInput = useSelector((state) => state.search.artist);
  const artistSpotify = useSelector((state) => state.search.artistSpotify);
  const songNameInput = useSelector((state) => state.search.track);

  const test = async () => {
    try {
      const artistName = dispatch(updateArtist(artist));
      const trackName = dispatch(updateTrack(title));
      dispatch(updateAlbumName(album));
      dispatch(updateAlbumUrl(albumArtUrl));
      const { data } = await axios.post(
        "https://fast-gorge-25731.herokuapp.com/spotify",
        {
          songName: title,
          artistName: artist,
          fromLanguage: "English",
          toLanguage: "Spanish",
        }
      );
      const artistSpotifyId = data[0];
      const trackSpotifyId = data[1];
      const genres = data[2];
      dispatch(updateGenres(genres));
      dispatch(updateArtistSpotifyURI(artistSpotifyId));
      dispatch(updateTrackSpotifyURI(trackSpotifyId));
      dispatch(updateFromLanguage("English"));
      dispatch(updateToLanguage("Spanish"));
      let newString = "";
      newString += title;
      newString += artist;
      const urlencode = encodeURIComponent(newString);
      navigator(`../room/${urlencode}`, { replace: true });
    } catch (err) {
      alert(err);
    }
  };

  let id = "id" + new Date().getTime();

  return (
    <>
      <div className="card-container" onClick={test}>
        <div className="image-container">
          <img className="img1" src={albumArtUrl} alt="albumart" />
        </div>
        <div className="card-content">
          <div className="song-title">
            <h2>{title}</h2>
          </div>
          <div className="song-artist">
            <h4>{artist}</h4>
          </div>
          <div className="Album">
            <h3>{album}</h3>
          </div>
        </div>
      </div>
      <div>
        <AddToPlayList
          id={id}
          title={title}
          artist={artist}
          albumArtUrl={albumArtUrl}
          album={album}
        />
      </div>
    </>
  );
}

export default SongCard;
