import { combineReducers } from "redux";
import registeredUserReducer from "./registeredUserReducer";
import searchReducer from "./searchReducer";
import playlistReducer from "./playlistReducer";

const allReducers = combineReducers({
  registeredUser: registeredUserReducer,
  search: searchReducer,
  playlist: playlistReducer,
});

export default allReducers;
