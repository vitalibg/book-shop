import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import CartComponent from "../page/cart/cart.component";

const CartTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <CartComponent />
      <FooterComponent />
    </>
  );
};

export default CartTemplateComponent;
