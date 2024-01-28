import { IBook } from "../util/schema/new";
import { IBookFull } from "../util/schema/books";

export interface INewBooksState {
  books: IBook[];
}

export interface INewBooksAction {
  type: string;
  payload: IBook[];
}

export interface IBookByISBNState {
  book: IBookFull;
}

export interface IBookByISBNAction {
  type: string;
  payload: IBookFull;
}
