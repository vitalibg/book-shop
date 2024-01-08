import React from "react";
import style from "../sign-in/sign-in.module.css";
import TextComponent from "../../common/text.component";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";

const CartPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"Cart"} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default CartPageComponent;
