import { INewBooksAction, INewBooksState } from "../type";

const initialState: INewBooksState = {
  books: []
};

export const newBooksReducer = (state: INewBooksState = initialState, action: INewBooksAction) => {
  switch (action.type) {
    case "SHOW_BOOKS":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
