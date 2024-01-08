import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import CartComponent from "../page/cart/cart.component";
import BookmarkComponent from "../page/bookmark/bookmark.component";

const CartTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BookmarkComponent />
      <FooterComponent />
    </>
  );
};

export default CartTemplateComponent;
