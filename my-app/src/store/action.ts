import { IBook } from "../util/schema/new";
import { AppDispatch } from "./store";
import apiFetchNewBooks from "../api/get-book-list";
import { IBookByISBN } from "../util/schema/books";
import apiFetchBook from "../api/get-book";
import apiSearchBook from "../api/search-book";

export const showBooks = (books: IBook[]) => ({
  type: "SHOW_BOOKS",
  payload: books
});

export const showBook = (book: IBookByISBN) => ({
  type: "SHOW_BOOK",
  payload: book
});

export const searchBook = (books: IBook[]) => ({
  type: "SEARCH_BOOK",
  payload: books
});

export const fetchNewBooks = () => async (dispatch: AppDispatch) => {
  dispatch(showBooks(await apiFetchNewBooks()));
};

export const fetchBook = (isbn: string) => async (dispatch: AppDispatch) => {
  dispatch(showBook(await apiFetchBook(isbn)));
};

export const getBook = (searchValue: string) => async (dispatch: AppDispatch) => {
  dispatch(searchBook(await apiSearchBook(searchValue)));
};
