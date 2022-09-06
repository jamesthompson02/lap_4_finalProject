import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const MusicRoomPage = () => {

    const artistName = useSelector(state => state.search.artist);
    const trackName = useSelector(state => state.search.track);
    const trackSpotifyId = useSelector(state => state.search.trackSpotify);
    const artistSpotifyId = useSelector(state => state.search.artistSpotify);
    const genres = useSelector(state => state.search.genres)
    const fromLanguage = useSelector(state => state.search.fromLanguage);
    const toLanguage = useSelector(state => state.search.toLanguage);
    useEffect(() => {
        // const postData = async () => {
        //     try{
        //         const { data } = await axios.post('http://localhost:8000/test', {
        //             "songName": trackName,
        //             "artistName": artistName,
        //             "fromLanguage": fromLanguage,
        //             "toLanguage": toLanguage
        //         })
        //         console.log(data[0], data[1]);
                
    
        //     } catch(err){
        //         console.log(err);
    
        //     }
        // }
        // postData();
        console.log(trackSpotifyId, artistSpotifyId, genres);
       
    }, []);
    return (
        <div>
            <h1 style={{color: "white"}}>{artistName} - {trackName}</h1>
            
        </div>
    );
}

export default MusicRoomPage;