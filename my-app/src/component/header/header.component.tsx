import React from "react";
import SearchComponent from "./search/search.component";
import UserComponent from "./user/user.component";
import style from "./header.module.css";
import TextComponent from "../common/text.component";

const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.title}>
            <TextComponent text={"Bookstore"} />
          </div>
          <SearchComponent />
          <UserComponent />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
