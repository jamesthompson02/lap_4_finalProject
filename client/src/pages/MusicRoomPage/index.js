import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RoomTitleCard from '../../components/RoomTitleCard';
import axios from 'axios';
import RecContainer from '../../components/RecContainer';
import LyricComponent from '../../components/LyricComponent';

const MusicRoomPage = () => {

    const artistName = useSelector(state => state.search.artist);
    const trackName = useSelector(state => state.search.track);
    const trackSpotifyId = useSelector(state => state.search.trackSpotify);
    const artistSpotifyId = useSelector(state => state.search.artistSpotify);
    const genres = useSelector(state => state.search.genres)
    const fromLanguage = useSelector(state => state.search.fromLanguage);
    const toLanguage = useSelector(state => state.search.toLanguage);
    
    return (
        <div>
            <RoomTitleCard />
            <LyricComponent />
            <RecContainer />
            
        </div>
    );
}

export default MusicRoomPage;