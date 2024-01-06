import React from "react";
import SearchComponent from "./search/search.component";
import UserComponent from "./user/user.component";
import style from "./header.module.css";
import TextComponent from "../common/text.component";

const HeaderComponent = () => {
  return (
    <header className={style.container}>
      <nav>
        <ul className={style.content}>
          <li className={style.title}>
            <TextComponent text={"Bookstore"} />
          </li>
          <li>
            <SearchComponent />
          </li>
          <li>
            <UserComponent />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
