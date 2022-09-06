import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "./style.css";
import { updateArtist, updateGenres, updateTrack, updateArtistSpotifyURI, updateTrackSpotifyURI, updateFromLanguage, updateToLanguage, updateAlbumName, updateAlbumUrl} from '../../actions';

const RecCard = ({title, titleId, artist, artistId, albumArtUrl, album}) => {

    const navigator = useNavigate();

    const dispatch = useDispatch();

    const [genres, setGenres ] = useState("");


    function setGen(name) {
        return setGenres(name);
    }

    const getSpotifyDetails = async () => {
        try{
            
            const {data} = await axios.post("http://localhost:8000/spotify/artistinfo", {
                "artistSpotify": artistId
            })
            setGen(data);

        } catch(err){
            console.log(err)
        }
    }

    const redirect = () => {
        dispatch(updateArtist(artist));
        dispatch(updateTrack(title));
        dispatch(updateGenres(genres));
        dispatch(updateArtistSpotifyURI(artistId));
        dispatch(updateTrackSpotifyURI(titleId));
        dispatch(updateFromLanguage("English"));
        dispatch(updateToLanguage("Spanish"));
        dispatch(updateAlbumName(album));
        dispatch(updateAlbumUrl(albumArtUrl));
        let newString = "";
        newString += title;
        newString += artist;
        const urlencode = encodeURIComponent(newString)
        navigator(`../room/${urlencode}`, { replace: true});

    }



    
    return (
        <div onLoad={getSpotifyDetails} onClick={redirect} className = 'card-container2' >
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
