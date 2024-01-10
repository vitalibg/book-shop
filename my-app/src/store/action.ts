import { IBook } from "../util/schema/new";
import { AppDispatch } from "./store";
import apiFetchNewBooks from "../api/get-book-list";

export const showBooks = (books: IBook[]) => ({
  type: "SHOW_BOOKS",
  payload: books
});

export const fetchNewBooks = () => async (dispatch: AppDispatch) => {
  dispatch(showBooks(await apiFetchNewBooks()));
};
