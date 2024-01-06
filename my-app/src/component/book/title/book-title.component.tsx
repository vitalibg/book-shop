import React from "react";
import TextComponent from "../../common/text.component";
import style from "./book-title.module.css";


interface BookTitleComponentProps {
  title: string;
}

const BookTitleComponent = ({ title }: BookTitleComponentProps) => {
  return (
    <div className={style.title}>
      <TextComponent text={title} />
    </div>
  );
};

export default BookTitleComponent;
