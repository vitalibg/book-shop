import React, { useEffect, useState } from "react";
import style from "../../../style/all.module.css";
import TextComponent from "../../common/text.component";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import favoritePageStyle from "../favorite/favorite.module.css";
import { IBookByISBN } from "../../../util/schema/books";
import CartBookComponent from "./book/cart-book.component";

const CartPageComponent = () => {
  const history = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")!));
  const handleClickGoBack = () => {
    history(-1);
  };

  useEffect(() => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", "[]");
    }
    // TODO: WARNING: Need do another solution
    setCart(JSON.parse(localStorage.getItem("cart")!));
  }, [cart]);

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
        <div className={favoritePageStyle.content}>
          {cart?.map((book: IBookByISBN, key: number) => <CartBookComponent key={key} book={book} />)}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default CartPageComponent;
