import React from "react";
import BookPictureComponent from "../../../book/picture/book-picture.component";
import TextComponent from "../../../common/text.component";
import { IBookByISBN } from "../../../../util/schema/books";
import RatingComponent from "../../book-view/rating/rating.component";
import favoriteBookStyle from "./favorite-book.module.css";
import style from "../../../../style/all.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";
import { Link } from "react-router-dom";

interface FavoriteBookComponentProps {
  book: IBookByISBN;
}

const FavoriteBookComponent = ({ book }: FavoriteBookComponentProps) => {
  return (
    <div className={favoriteBookStyle.container}>
      <BookPictureComponent image={book.image} />
      <div className={favoriteBookStyle.content}>
        <Link to={`/books/${book.isbn13}`}>
          <div className={style.subTitle}>
            <TextComponent text={book.title} />
          </div>
        </Link>
        <div className={favoriteBookStyle.authorAndYearContainer}>
          <TextComponent text={"by " + book.authors + ", "} />
          <TextComponent text={" " + book.year} />
        </div>
        <div className={favoriteBookStyle.priceRatingContainer}>
          <TextComponent text={book.price} />
          <RatingComponent defaultRating={Number.parseInt(book?.rating)} />
        </div>
      </div>
      <div className={favoriteBookStyle.heart}>
        <IconComponent icon={<FontAwesomeIcon icon={faHeart} />} />
      </div>
    </div>
  );
};

export default FavoriteBookComponent;
