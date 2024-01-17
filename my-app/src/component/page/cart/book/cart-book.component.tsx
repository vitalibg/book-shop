import React, { useEffect, useState } from "react";
import BookPictureComponent from "../../../book/picture/book-picture.component";
import TextComponent from "../../../common/text.component";
import { IBookByISBN } from "../../../../util/schema/books";
import cartBookStyle from "./cart-book.module.css";
import style from "../../../../style/all.module.css";
import { Link } from "react-router-dom";
import LabelComponent from "../../../common/label.component";
import IconComponent from "../../../common/icon.component";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartBookComponentProps {
  book: IBookByISBN;
  clickCrossImageHandler: () => void;
  changeBookCount: (bookId: string, bookCount: number) => void;
}

const CartBookComponent = ({ book, clickCrossImageHandler, changeBookCount }: CartBookComponentProps) => {
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(+book.price.substring(1) * number);

  const decreaseQuantityHandler = () => {
    if (number - 1 !== 0) {
      setPrice(price - price / number);
      setNumber(number - 1);
    }
    return;
  };

  const increaseQuantityHandler = () => {
    setPrice(price + price / number);
    setNumber(number + 1);
  };

  useEffect(() => {
    changeBookCount(book.isbn13, number);
    console.log("book.isbn13", book.isbn13);
    console.log("number", number);
  }, [number]);

  // const clickCrossImageHandler = () => {
  //   let cart = JSON.parse(localStorage.getItem("cart")!);
  //   localStorage.removeItem("cart");
  //   let updCart = cart.filter(($book: IBookByISBN) => $book.isbn13 !== book.isbn13);
  //   localStorage.setItem("cart", JSON.stringify(updCart));
  // };

  return (
    <div className={cartBookStyle.container}>
      <BookPictureComponent image={book.image} />
      <div className={cartBookStyle.content}>
        <Link to={`/books/${book.isbn13}`}>
          <div className={style.subTitle}>
            <TextComponent text={book.title} />
          </div>
        </Link>
        <div className={cartBookStyle.authorAndYearContainer}>
          <TextComponent text={"by " + book.authors + ", "} />
          <TextComponent text={book.year} />
        </div>
        <div className={cartBookStyle.bookQuantity}>
          <div onClick={decreaseQuantityHandler}>
            <IconComponent icon={<FontAwesomeIcon icon={faMinus} />} />
          </div>
          {number}
          <div onClick={increaseQuantityHandler}>
            <IconComponent icon={<FontAwesomeIcon icon={faPlus} />} />
          </div>
        </div>
      </div>
      <div className={cartBookStyle.control}>
        <LabelComponent text={`$${price.toFixed(2)}`} />
        <div onClick={clickCrossImageHandler}>
          <IconComponent icon={<FontAwesomeIcon icon={faXmark} />} />
        </div>
      </div>
    </div>
  );
};

export default CartBookComponent;
