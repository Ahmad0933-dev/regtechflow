// src/redux/sagas/rootSaga.js
import { all } from "redux-saga/effects";
import watchSetLanguage from "./languageSaga";

export default function* rootSaga() {
  yield all([
    watchSetLanguage(), // Add the language watcher saga here
  ]);
}
