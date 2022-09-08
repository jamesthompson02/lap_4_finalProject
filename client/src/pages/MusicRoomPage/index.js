import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import RoomTitleCard from '../../components/RoomTitleCard';
import axios from 'axios';
import RecContainer from '../../components/RecContainer';
import LoadingSpinner from '../../components/LoadingSpinner';
import LyricComponent from '../../components/LyricComponent';
import './musicRoom.css'

const MusicRoomPage = () => {
    const loading = useSelector((state) => state.search.loading);
    const artistName = useSelector(state => state.search.artist);
    const trackName = useSelector(state => state.search.track);
    const trackSpotifyId = useSelector(state => state.search.trackSpotify);
    const artistSpotifyId = useSelector(state => state.search.artistSpotify);
    const genres = useSelector(state => state.search.genres)
    const fromLanguage = useSelector(state => state.search.fromLanguage);
    const toLanguage = useSelector(state => state.search.toLanguage);
    
    
            if(loading) {
                return <LoadingSpinner />
            }


    return (
        <div className='music-room-main-div'>
            <RoomTitleCard />
            <LyricComponent />
            <RecContainer />            
        </div>
    );
}

export default MusicRoomPage;
