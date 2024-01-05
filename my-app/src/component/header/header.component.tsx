import React from "react";
import TitleComponent from "./title/title.component";
import SearchComponent from "./search/search.component";
import UserComponent from "./user/user.component";
import style from "./header.module.css";

const HeaderComponent = () => {
  return (
    <header className={style.container}>
      <nav>
        <ul className={style.content}>
          <li className={style.menuItem}>
            <TitleComponent title={"Bookstore"} />
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
