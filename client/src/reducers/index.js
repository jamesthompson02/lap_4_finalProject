import { combineReducers } from "redux";
import registeredUserReducer from "./registeredUserReducer";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
  registeredUser: registeredUserReducer,
  search: searchReducer
});

export default allReducers;

