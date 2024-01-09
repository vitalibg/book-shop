import { combineReducers } from "@reduxjs/toolkit";
import { bookReducer } from "./book";

export const rootReducer = combineReducers({
  bookList: bookReducer
});
