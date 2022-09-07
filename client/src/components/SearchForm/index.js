<<<<<<< HEAD
import React, { useRef } from "react";
import axios from "axios";
import Btn from "../Btn";
import "../../pages/DashboardPage/dashboard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updateArtist,
  updateGenres,
  updateTrack,
  updateArtistSpotifyURI,
  updateTrackSpotifyURI,
  updateFromLanguage,
  updateToLanguage,
} from "../../actions";
=======
import React, { useRef } from 'react';
import axios from 'axios';
import Btn from '../Btn';
import '../../pages/DashboardPage/dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateArtist, updateGenres, updateTrack, updateArtistSpotifyURI, updateTrackSpotifyURI, updateFromLanguage, updateToLanguage, updateAlbumName, updateAlbumUrl} from '../../actions';

>>>>>>> e91fe9a67f10368acb64eb22a0859f2e7d57a4c8

const SearchForm = () => {
  const navigator = useNavigate();

  const dispatch = useDispatch();

<<<<<<< HEAD
  const songNameInput = useRef();
  const artistNameInput = useRef();
  const fromLanguage = useRef();
  const toLanguage = useRef();
=======
    const songNameInput = useRef();
    const artistNameInput = useRef();
    const fromLanguage = useRef();
    const toLanguage = useRef();
  
    const test = async (e) => {
        e.preventDefault();
        if (songNameInput.current.value === "") {
            return alert("Please input a song name to search");
        } else if (artistNameInput.current.value === "") {
            return alert("Please input an artist name to search");
        } else if (fromLanguage.current.value === toLanguage.current.value) {
            return alert("Please ensure you have selected two different languages")
        }
        try {
            const { data } = await axios.post('http://localhost:8000/spotify/', {
                "songName": songNameInput.current.value,
                "artistName": artistNameInput.current.value,
                "fromLanguage": fromLanguage.current.value,
                "toLanguage": toLanguage.current.value
            })
            const artistSpotifyId = data[0];
            const trackSpotifyId = data[1];
            const genres = data[2];
            const albumName = data[3];
            const albumUrl = data[4];
            dispatch(updateArtist(artistNameInput.current.value));
            dispatch(updateTrack(songNameInput.current.value));
            dispatch(updateGenres(genres));
            dispatch(updateArtistSpotifyURI(artistSpotifyId));
            dispatch(updateTrackSpotifyURI(trackSpotifyId));
            dispatch(updateFromLanguage(fromLanguage.current.value));
            dispatch(updateToLanguage(toLanguage.current.value));
            dispatch(updateAlbumName(albumName));
            dispatch(updateAlbumUrl(albumUrl));
            let newString = "";
            newString += songNameInput.current.value;
            newString += artistNameInput.current.value;
            const urlencode = encodeURIComponent(newString)
            navigator(`../room/${urlencode}`, { replace: true});
        } catch(err){
            alert(err);
        }
>>>>>>> e91fe9a67f10368acb64eb22a0859f2e7d57a4c8

  const test = async (e) => {
    e.preventDefault();
    if (songNameInput.current.value === "") {
      return alert("Please input a song name to search");
    } else if (artistNameInput.current.value === "") {
      return alert("Please input an artist name to search");
    } else if (fromLanguage.current.value === toLanguage.current.value) {
      return alert("Please ensure you have selected two different languages");
    }
    try {
      const { data } = await axios.post("http://localhost:8000/spotify/", {
        songName: songNameInput.current.value,
        artistName: artistNameInput.current.value,
        fromLanguage: fromLanguage.current.value,
        toLanguage: toLanguage.current.value,
      });
      const artistSpotifyId = data[0];
      const trackSpotifyId = data[1];
      const genres = data[2];
      console.log(artistSpotifyId, trackSpotifyId, genres);
      dispatch(updateArtist(artistNameInput.current.value));
      dispatch(updateTrack(songNameInput.current.value));
      dispatch(updateGenres(genres));
      dispatch(updateArtistSpotifyURI(artistSpotifyId));
      dispatch(updateTrackSpotifyURI(trackSpotifyId));
      dispatch(updateFromLanguage(fromLanguage.current.value));
      dispatch(updateToLanguage(toLanguage.current.value));
      let newString = "";
      newString += songNameInput.current.value;
      newString += artistNameInput.current.value;
      const urlencode = encodeURIComponent(newString);
      navigator(`../room/${urlencode}`, { replace: true });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="dashForm">
      <form>
        <div>
          {/* <label htmlFor='songName'>Song Name:</label> */}
          <input
            ref={songNameInput}
            type="text"
            id="songName"
            name="songName"
            placeholder="Enter Song Name Here"
          />

          {/* <label htmlFor='artistName'>Artist Name:</label> */}
          <input
            ref={artistNameInput}
            type="text"
            id="songName"
            name="songName"
            placeholder="Enter Artist Name Here"
          />
        </div>
        <div className="chooselang">
          <label className="fromTolabel" htmlFor="fromLanguage">
            From:
          </label>
          <select ref={fromLanguage} name="fromLanguage" id="fromLanguage">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <label className="tolabel" htmlFor="toLanguage">
            To:
          </label>
          <select ref={toLanguage} name="toLanguage" id="toLanguage">
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="btn-div">
          <Btn text="Submit" handleClick={test} />
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
