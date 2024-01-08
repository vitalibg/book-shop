import React from "react";
import FavoriteComponent from "./favorite/favorite.component";
import CartComponent from "./cart/cart.component";
import SignInUpComponent from "./sign-in-up/sign-in-up.component";
import style from "./user.module.css";

const UserComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <FavoriteComponent />
        <CartComponent />
        <SignInUpComponent />
      </div>
    </div>
  );
};

export default UserComponent;
