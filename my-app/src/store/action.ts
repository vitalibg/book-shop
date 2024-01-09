import { IBook } from "../util/schema/new";
import { AppDispatch } from "./store";
import apiFetchNewBooks from "../api/get-book-list";
import apiFetchTotalBooks from "../api/get-total-page";

export const showBooks = (books: IBook[]) => ({
  type: "SHOW_BOOKS",
  payload: books
});

export const getBooksPerPage = (books: string) => ({
  type: "BOOKS_PER_PAGE",
  payload: books
});

export const fetchNewBooks = () => async (dispatch: AppDispatch) => {
  dispatch(showBooks(await apiFetchNewBooks()));
  dispatch(getBooksPerPage(await apiFetchTotalBooks()));
};
