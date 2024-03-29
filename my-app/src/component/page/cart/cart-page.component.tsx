import React, { useState } from "react";
import style from "../../../style/all.module.css";
import TextComponent from "../../common/text.component";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import cartPageStyle from "./cart.module.css";
import { IBookFull } from "../../../util/schema/books";
import CartBookComponent from "./book/cart-book.component";
import TotalPriceComponent, { IBook } from "./total-price/total-price-component";

const CartPageComponent = () => {
  const history = useNavigate();
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : []);

  const handleClickGoBack = () => {
    history(-1);
  };

  const clickCrossImageHandler = (book: IBook) => {
    let cart = JSON.parse(localStorage.getItem("cart")!);
    let updCart = cart.filter((value: { book: IBookFull }) => value.book.isbn13 !== book.book.isbn13);
    localStorage.setItem("cart", JSON.stringify(updCart));
    setCart((prev: any) => prev.filter((value: { book: IBookFull }) => value.book.isbn13 !== book.book.isbn13));
  };

  const changeBookCount = (bookId: string, bookNumber: number) => {
    let cart = JSON.parse(localStorage.getItem("cart")!);
    let updCart = cart.map((value: { book: IBookFull }) =>
      value.book.isbn13 !== bookId ? value : { ...value, count: bookNumber }
    );
    localStorage.setItem("cart", JSON.stringify(updCart));
    setCart((prev: any) =>
      prev.map((value: { book: IBookFull }) =>
        value.book.isbn13 !== bookId ? value : { ...value, count: bookNumber }
      )
    );
  };

  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div onClick={handleClickGoBack} className={style.navBack}>
          <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
        </div>
        <div className={style.title}>
          <TextComponent text={"Cart"} />
        </div>
        <div className={cartPageStyle.content}>
          {cart?.map((book: IBook, key: number) => (
            <CartBookComponent
              changeBookCount={changeBookCount}
              clickCrossImageHandler={() => clickCrossImageHandler(book)}
              key={key}
              book={book.book}
            />
          ))}
        </div>
        <TotalPriceComponent cart={cart} />
      </div>
      <FooterComponent />
    </>
  );
};

export default CartPageComponent;
