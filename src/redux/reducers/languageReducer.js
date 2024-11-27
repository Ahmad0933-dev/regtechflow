// src/redux/reducers/languageReducer.js
import secureLocalStorage from "react-secure-storage";

const language = secureLocalStorage.getItem("language");

const initialState = { language: (language && language) || "en" }; // Default language is English

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      // Set the new language in secureLocalStorage
      secureLocalStorage.setItem("language", action.payload);
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
