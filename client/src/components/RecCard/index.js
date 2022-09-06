import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "./style.css";

const RecCard = ({title, artist, albumArtUrl, album}) => {

    
    return (
        <div className = 'card-container2'>
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
