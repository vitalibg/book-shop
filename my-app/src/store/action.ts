import { IBook } from "../util/schema/new";
import { AppDispatch } from "./store";
import apiFetchNewBooks from "../api/get-book-list";
import { IBookByISBN } from "../util/schema/books";
import apiFetchBook from "../api/get-book";

export const showBooks = (books: IBook[]) => ({
  type: "SHOW_BOOKS",
  payload: books
});

export const viewBook = (book: IBookByISBN) => ({
  type: "VIEW_BOOK",
  payload: book
});

export const fetchNewBooks = () => async (dispatch: AppDispatch) => {
  dispatch(showBooks(await apiFetchNewBooks()));
};

export const fetchBook = (isbn: string) => async (dispatch: AppDispatch) => {
  dispatch(viewBook(await apiFetchBook(isbn)));
};
