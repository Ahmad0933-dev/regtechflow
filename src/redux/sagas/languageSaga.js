import { put, takeEvery } from 'redux-saga/effects';
import secureLocalStorage from 'react-secure-storage';

// Worker saga to handle the language change and persist it to secureLocalStorage
function* setLanguageSaga(action) {
  try {
    // Set the new language in secureLocalStorage
    secureLocalStorage.setItem("language", action.payload);
    // You can perform additional side effects here if needed, like logging or tracking
  } catch (error) {
    console.error("Error saving language to secureLocalStorage", error);
  }
}

// Watcher saga to listen for the SET_LANGUAGE action
function* watchSetLanguage() {
  yield takeEvery('SET_LANGUAGE', setLanguageSaga);
}

export default watchSetLanguage;
