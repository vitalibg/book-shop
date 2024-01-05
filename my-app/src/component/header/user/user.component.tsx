import React from "react";
import FavoriteComponent from "./favorite/favorite.component";
import CartComponent from "./cart/cart.component";
import SignInUpComponent from "./sign-in-up/sign-in-up.component";
import style from "./user.module.css"

const UserComponent = () => {
  return (
    <nav className={style.container}>
      <ul className={style.content}>
        <li className={style.menuItem}><FavoriteComponent/></li>
        <li className={style.menuItem}><CartComponent/></li>
        <li className={style.menuItem}><SignInUpComponent/></li>
      </ul>
    </nav>
  );
};

export default UserComponent;
