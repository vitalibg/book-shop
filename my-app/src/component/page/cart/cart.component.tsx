import React from "react";
import style from "../sign-in/sign-in.module.css";
import TextComponent from "../../common/text.component";

const CartComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <TextComponent text={"Cart"} />
      </div>
    </div>
  );
};

export default CartComponent;
