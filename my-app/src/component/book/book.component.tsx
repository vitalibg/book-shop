import React from "react";
import BookPictureComponent from "./picture/book-picture.component";
import BookPriceRateComponent from "./price-rate/book-price-rate.component";
import style from "./book.module.css";
import TextComponent from "../common/text.component";

interface BookComponentProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const BookComponent = ({ image, title, description, price }: BookComponentProps) => {
  return (
    <div className={style.container}>
      <BookPictureComponent image={image} />
      <div className={style.title}>
        <TextComponent text={title} />
      </div>
      <div className={style.description}>
        <TextComponent text={description} />
      </div>
      <BookPriceRateComponent price={price} />
    </div>
  );
};

export default BookComponent;
