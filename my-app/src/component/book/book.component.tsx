import React from "react";
import BookPictureComponent from "./picture/book-picture.component";
import BookPriceRateComponent from "./price-rate/book-price-rate.component";
import style from "./book.module.css";
import TextComponent from "../common/text.component";
import { IBook } from "../../util/schema/new";

interface BookComponentProps {
  book: IBook;
}

const BookComponent = ({ book }: BookComponentProps) => {
  return (
    <div className={style.container}>
      <BookPictureComponent image={book.image} />
      <div className={style.title}>
        <TextComponent text={book.title} />
      </div>
      <div className={style.description}>
        <TextComponent text={book.subtitle} />
      </div>
      <BookPriceRateComponent price={book.price} />
    </div>
  );
};

export default BookComponent;
