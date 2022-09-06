import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "./style.css";

const RecCard = ({title, artist, albumArtUrl, album}) => {

    const [artistSpotifyId, setArtistId ] = useState("");
    const [trackSpotifyId, setTrackId ] = useState("");
    const [genres, setGenres ] = useState("");

    function setArtist(name) {
        return setArtistId(name);
    }

    function setTrack(name) {
        return setTrackId(name);
    }

    function setGen(name) {
        return setGenres(name);
    }

    const getSpotifyDetails = async () => {
        try{
            const { data } = await axios.post("http://localhost:8000/spotify/reccard", {
                 "songName": title,
                 "artistName": artist
            })
            console.log(data);


        } catch(err){
            console.log(err)
        }
    }

    
    return (
        <div onLoad={getSpotifyDetails} className = 'card-container2' >
            <div className= 'image-container2'>
            <img  className='img12' src={albumArtUrl} alt='albumart'/>
            </div>
            <div className = 'card-content2'>
            <div className= 'song-title2'>
                <h2>{title}</h2>
            </div>
            <div className= 'song-artist2'>
                <h4>{artist}</h4>
            </div>
            <div className= 'Album2'>
                <h3>{album}</h3>
            </div>
            </div> 
            
        </div>
    );
}

export default RecCard;
