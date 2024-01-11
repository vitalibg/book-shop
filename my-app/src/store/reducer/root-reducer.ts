import { combineReducers } from "@reduxjs/toolkit";
import { newBooksReducer } from "./new-books";
import { bookReducer } from "./book";

export const rootReducer = combineReducers({
  bookList: newBooksReducer,
  book: bookReducer
});
