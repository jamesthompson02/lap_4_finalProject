import React, { useEffect, useState } from "react";
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
import "./style.css";
import RecCard from "../RecCard/index";

const RecContainer = () => {
  const artistSpotifyId = useSelector((state) => state.search.artistSpotify);
  const trackSpotifyId = useSelector((state) => state.search.trackSpotify);
  const genres = useSelector((state) => state.search.genres);
  const trackName = useSelector((state) => state.search.track);

  const [recommendedSongs, setSongs] = useState([]);

  function addSongs(songs) {
    return setSongs(songs);
  }

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        const newArr = [];
        const { data } = await axios.post(
          "https://fast-gorge-25731.herokuapp.com/spotify/recommendations",
          {
            songId: trackSpotifyId,
            artistId: artistSpotifyId,
            genres: genres,
          }
        );
        const tracks = data.tracks;
        tracks.forEach((track) => {
          const songName = track.name;
          const songSpotifyId = track.id;
          const artistName = track.artists[0].name;
          const artistSpotifyId = track.artists[0].id;
          const albumName = track.album.name;
          const albumUrl = track.album.images[0].url;
          const details = {
            songName: songName,
            songSpotify: songSpotifyId,
            artistName: artistName,
            artistSpotify: artistSpotifyId,
            albumName: albumName,
            albumUrl: albumUrl,
          };
          newArr.push(details);
        });
        addSongs(newArr);
      } catch (err) {
        console.log(err);
      }
    };

    getRecommendations();
  }, [trackName]);

  function randomKeyGenerator() {
    let newKey = "";
    for (let i = 0; i <= 24; i++) {
      let newConst = Math.floor(Math.random() * 10);
      newKey += newConst;
    }
    return newKey;
  }

  return (
    <div style={{padding: '20px', margin: '0 auto'}}>
      <h2 style={{ color: "white" }}>Because you liked: {trackName}</h2>
      <div style={{ color: "white" }}>
        {recommendedSongs.length > 0
          ? recommendedSongs.map((eachSong) => {
              return (
                <RecCard
                  title={eachSong.songName}
                  titleId={eachSong.songSpotify}
                  artist={eachSong.artistName}
                  artistId={eachSong.artistSpotify}
                  album={eachSong.albumName}
                  albumArtUrl={eachSong.albumUrl}
                  key={randomKeyGenerator()}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default RecContainer;
