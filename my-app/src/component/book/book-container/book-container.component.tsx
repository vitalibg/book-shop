import React from "react";
import style from "./book-container.module.css";
import BookComponent from "../book.component";
import { IBook } from "../../../util/schema/new";

interface BookContainerComponentProps {
  books: IBook[];
}

const BookContainerComponent = ({ books }: BookContainerComponentProps) => {
  return (
    <div className={style.container}>
      {books.map((book,i) => (
        <BookComponent key={i} image={book.image} title={book.title} description={book.subtitle} price={book.price} />
      ))}
    </div>
  );
};

export default BookContainerComponent;
