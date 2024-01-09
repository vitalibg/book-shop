import { IBook } from "../util/schema/new";

export interface BookActionType {
  type: string;
  payload: IBook[];
}

export interface BookListActionType {
  type: string;
  payload: string;
}
