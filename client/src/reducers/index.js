import { combineReducers } from "redux";
import registeredUserReducer from "./registeredUserReducer";

const allReducers = combineReducers({
  registeredUser: registeredUserReducer,
});

export default allReducers;
