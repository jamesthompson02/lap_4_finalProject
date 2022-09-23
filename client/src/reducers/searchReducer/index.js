const initState = { 
    track: "", 
    trackSpotify: "",
    artist: "",
    artistSpotify: "",
    genres: "",
    albumName: "",
    albumArtUrl: "",
    fromLanguage: "",
    toLanguage: "",
    loading: false,
    error: false
};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE ARTIST':
            return { ...state, artist: action.payload, error: false};
        case 'UPDATE ARTIST SPOTIFY URI':
            return { ...state, artistSpotify: action.payload, error: false };
        case 'UPDATE TRACK':
            return { ...state, track: action.payload, error: false};
        case 'UPDATE TRACK SPOTIFY URI':
            return { ...state, trackSpotify: action.payload, error: false };
        case 'UPDATE ALBUM NAME':
            return { ...state, albumName: action.payload, error: false};
        case 'UPDATE ALBUM URL':
            return { ...state, albumArtUrl: action.payload, error: false };
        case 'UPDATE GENRES':
            return {...state, genres: action.payload, error: false};
        case 'UPDATE FROM LANGUAGE':
            return {...state, fromLanguage: action.payload, error: false}
        case 'UPDATE TO LANGUAGE':
            return {...state, toLanguage: action.payload, error: false}
        case 'LOADING':
            return { ...state, loading: action.payload, error: false};
        case 'LOADED':
            return { ...state, loading: action.payload, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    };
};

export default searchReducer;