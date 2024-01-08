import React from "react";
import style from "../sign-in/sign-in.module.css";
import TextComponent from "../../common/text.component";

const BookmarkComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <TextComponent text={"Bookmarks"} />
      </div>
    </div>
  );
};

export default BookmarkComponent;
