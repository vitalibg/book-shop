import React from "react";
import ImageComponent from "../../common/image.component";
import style from "./book-picture.module.css";

interface BookPictureComponentProps {
  image: string;
  title: string;
}

const BookPictureComponent = ({ image, title }: BookPictureComponentProps) => {
  return (
    <div className={style.img}>
      <ImageComponent image={image} title={title} />
    </div>
  );
};

export default BookPictureComponent;
