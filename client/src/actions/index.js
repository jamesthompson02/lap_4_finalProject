export const updateArtist = (artistName) => {
    return {
        type: "UPDATE ARTIST",
        payload: artistName
    }
}

export const updateArtistSpotifyURI = (artistSpotifyIdentifier) => {
    return {
        type: "UPDATE ARTIST SPOTIFY URI",
        payload: artistSpotifyIdentifier
    }
}

export const updateTrack = (trackName) => {
    return {
        type: "UPDATE TRACK",
        payload: trackName
    }
}

export const updateTrackSpotifyURI = (trackSpotifyIdentifier) => {
    return {
        type: "UPDATE TRACK SPOTIFY URI",
        payload: trackSpotifyIdentifier
    }
}

export const updateGenres = (genres) => {
    return {
        type: "UPDATE GENRES",
        payload: genres
    }
}

export const updateFromLanguage = (language) => {
    return {
        type: "UPDATE FROM LANGUAGE",
        payload: language
    }
}

export const updateToLanguage = (language) => {
    return {
        type: "UPDATE TO LANGUAGE",
        payload: language
    }
}



export const loading = (loadingStatus) => {
    return {
        type: "LOADING",
        payload: loadingStatus
    }
}

export const loaded = (loadingStatus) => {
    return {
        type: "LOADED",
        payload: loadingStatus
    }
}

export const errorMesage = (message) => {
    return {
        type: "SET ERROR",
        payload: message
    }
}