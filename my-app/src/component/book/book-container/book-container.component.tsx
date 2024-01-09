import React from "react";
import style from "./book-container.module.css";
import BookComponent from "../book.component";
import { IBook } from "../../../util/schema/new";
import { Link } from "react-router-dom";

interface BookContainerComponentProps {
  books: IBook[];
}

const BookContainerComponent = ({ books }: BookContainerComponentProps) => {
  return (
    <div className={style.container}>
      {books.map((book, i) => (
        <Link to={`/book-view/${i}`}>
          <BookComponent key={i} image={book.image} title={book.title} description={book.subtitle} price={book.price} />
        </Link>
      ))}
    </div>
  );
};

export default BookContainerComponent;
