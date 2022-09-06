import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "./style.css";

const RoomTitleCard = () => {

    const albumArtUrl = useSelector(state => state.search.albumArtUrl);
    const title = useSelector(state => state.search.track);
    const artist = useSelector(state => state.search.artist);
    const album = useSelector(state => state.search.albumName);

    return (
        <div className = 'card-container1'>
            <div className= 'image-container1'>
            <img  className='img11' src={albumArtUrl} alt='albumart'/>
            </div>
            <div className = 'card-content1'>
            <div className= 'song-title1'>
                <h2>{title}</h2>
            </div>
            <div className= 'song-artist1'>
                <h4>{artist}</h4>
            </div>
            <div className= 'Album1'>
                <h3>{album}</h3>
            </div>
            </div> 
            
        </div>
    );
}

export default RoomTitleCard;
