import { BookListActionType } from "../type";

export interface IState {
  booksPerPage: number;
}

const initialState: IState = {
  booksPerPage: 3
};

export const bookListDataReducer = (state: IState = initialState, action: BookListActionType) => {
  switch (action.type) {
    case "BOOKS_PER_PAGE":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
