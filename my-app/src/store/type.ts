import { IBook } from "../util/schema/new";
import { IBookByISBN } from "../util/schema/books";

export interface INewBooksState {
  books: IBook[];
}

export interface INewBooksAction {
  type: string;
  payload: IBook[];
}

export interface IBookByISBNState {
  book: IBookByISBN;
}

export interface IBookByISBNAction {
  type: string;
  payload: IBookByISBN;
}
