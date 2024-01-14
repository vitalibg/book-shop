import { IBookByISBNAction, IBookByISBNState } from "../type";

const initialState: IBookByISBNState = {
  book: {
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    language: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: ""
  }
};

export const bookReducer = (state: IBookByISBNState = initialState, action: IBookByISBNAction) => {
  switch (action.type) {
    case "VIEW_BOOK":
      return { ...state, book: action.payload };
    default:
      return state;
  }
};
