import React from "react";
import ImageComponent from "../../common/image.component";
import style from "./book-picture.module.css";

interface BookPictureComponentProps {
  image: string;
}

const BookPictureComponent = ({ image }: BookPictureComponentProps) => {
  return (
    <div className={style.img}>
      <ImageComponent image={image} />
    </div>
  );
};

export default BookPictureComponent;
