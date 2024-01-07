import React from "react";
import style from "./book-container.module.css";
import BookComponent from "../book.component";

interface BookContainerComponentProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const BookContainerComponent = ({ image, title, description, price }: BookContainerComponentProps) => {
  return (
    <div className={style.container}>
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
      <BookComponent image={image} title={title} description={description} price={price} />
    </div>
  );
};

export default BookContainerComponent;
