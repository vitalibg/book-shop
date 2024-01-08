import { combineReducers } from "@reduxjs/toolkit";
import { bookReducer } from "./book";

export const rootReducer = combineReducers({
  book: bookReducer
});