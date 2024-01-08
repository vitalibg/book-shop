import React from "react";
import SearchComponent from "./search/search.component";
import UserComponent from "./user/user.component";
import style from "./header.module.css";
import TextComponent from "../common/text.component";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.title}>
            <Link to={"/"}>
              <TextComponent text={"Bookstore"} />
            </Link>
          </div>
          <SearchComponent />
          <UserComponent />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
