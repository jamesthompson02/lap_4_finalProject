const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const getLocalStorage = () => {
  let playlist = localStorage.getItem("playlist");
  if (playlist) {
    return JSON.parse(localStorage.getItem("playlist"));
  } else {
    return [];
  }
};

const initialState = {
  playlist: getLocalStorage(),
  isLoading: false,
  user: user ? user : null,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      const newSong = action.payload;
      localStorage.setItem("playlist", JSON.stringify(state.playlist));
      return {
        ...state,
        playlist: [...state.playlist, newSong],
      };

    case "REMOVE_SONG":
      let tempPlaylist = state.playlist.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        playlist: tempPlaylist,
        isLoading: false,
      };

    case "CLEAR_PLAYLIST":
      localStorage.clear();
      return {
        ...state,
        playlist: [],
      };

    default:
      return state;
  }
};

export default playlistReducer;
