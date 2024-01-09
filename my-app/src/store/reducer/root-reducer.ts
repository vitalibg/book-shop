import { combineReducers } from "@reduxjs/toolkit";
import { bookReducer } from "./book";
import { bookListDataReducer } from "./bookListData";

export const rootReducer = combineReducers({
  bookList: bookReducer,
  bookListData: bookListDataReducer
});
