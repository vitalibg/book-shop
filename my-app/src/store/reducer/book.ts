import { BookActionType } from "../type";
import { IBook } from "../../util/schema/new";

export interface IState {
  books: IBook[];
}

const initialState: IState = {
  books: []
};

export const bookReducer = (state: IState = initialState, action: BookActionType) => {
  switch (action.type) {
    case "SHOW_BOOKS":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
