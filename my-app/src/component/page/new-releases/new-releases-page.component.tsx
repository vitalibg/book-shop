import React from "react";
import TextComponent from "../../common/text.component";
import BookContainerComponent from "../../book/book-container/book-container.component";
import PaginationComponent from "../../pagination/pagination.component";
import SubscribeComponent from "../../subscribe/subscribe.component";
import style from "../../../style/all.module.css";
import image from "./../../../assets/opened-book-06-adding-another-outline-850x638.png";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";

const NewReleasesPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"New releases book"} />
        </div>
        <div className={style.book}>
          <BookContainerComponent image={image} title={"Title"} description={"TestDescription"} price={"123$"} />
        </div>
        <div className={style.pagination}>
          <PaginationComponent />
        </div>
        <div className={style.subscribe}>
          <SubscribeComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default NewReleasesPageComponent;
