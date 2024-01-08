import React from "react";
import style from "../sign-in/sign-in.module.css";
import TextComponent from "../../common/text.component";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";

const BookmarkPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"Bookmarks"} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default BookmarkPageComponent;
