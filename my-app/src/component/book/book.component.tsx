import React from "react";
import BookPictureComponent from "./picture/book-picture.component";
import BookTitleComponent from "./title/book-title.component";
import BookDescriptionComponent from "./description/book-description.component";
import BookPriceRateComponent from "./price-rate/book-price-rate.component";
import style from "./book.module.css";

interface BookComponentProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const BookComponent = ({ image, title, description, price }: BookComponentProps) => {
  return (
    <div className={style.container}>
      <BookPictureComponent image={image} title={title} />
      <BookTitleComponent title={title} />
      <BookDescriptionComponent description={description} />
      <BookPriceRateComponent price={price} />
    </div>
  );
};

export default BookComponent;
