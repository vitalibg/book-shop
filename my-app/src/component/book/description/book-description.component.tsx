import React from "react";
import TextComponent from "../../common/text.component";
import style from "./book-description.module.css";

interface BookDescriptionComponentProps {
  description: string;
}

const BookDescriptionComponent = ({ description }: BookDescriptionComponentProps) => {
  return (
    <div className={style.description}>
      <TextComponent text={description} />
    </div>
  );
};

export default BookDescriptionComponent;
