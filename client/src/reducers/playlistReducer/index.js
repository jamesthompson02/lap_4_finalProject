const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = {
  playlist: [],
  isLoading: false,
  user: user ? user : null,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      const newSong = action.payload;
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
      return {
        ...state,
        playlist: [],
      };

    default:
      return state;
  }
};

export default playlistReducer;
