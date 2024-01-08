import React from "react";
import FavoriteComponent from "./favorite/favorite.component";
import CartComponent from "./cart/cart.component";
import SignInUpComponent from "./sign-in-up/sign-in-up.component";
import style from "./user.module.css";
import { Link } from "react-router-dom";

const UserComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <Link to={"/bookmarks"}>
          <FavoriteComponent />
        </Link>
        <Link to={"/cart"}>
          <CartComponent />
        </Link>
        <Link to={"/sign-in"}>
          <SignInUpComponent />
        </Link>
      </div>
    </div>
  );
};

export default UserComponent;
