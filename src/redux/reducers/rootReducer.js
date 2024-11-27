// src/redux/reducers/rootReducer.js
import { combineReducers } from "redux";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers({
  language: languageReducer, // Add the language reducer here
});

export default rootReducer;

