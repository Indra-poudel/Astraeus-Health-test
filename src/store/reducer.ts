import { combineReducers } from "@reduxjs/toolkit";

// reducer
import counterReducer from "./counter/slice";

export default combineReducers({
  counter: counterReducer,
});
