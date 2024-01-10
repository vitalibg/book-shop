import React from "react";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import style from "../../../style/all.module.css";
import TextComponent from "../../common/text.component";
import bookViewStyle from "./book-view.module.css";
import ImageComponent from "../../common/image.component";
import BookPriceRateComponent from "../../book/price-rate/book-price-rate.component";
import ButtonComponent from "../../common/button.component";
import SubscribeComponent from "../../subscribe/subscribe.component";
import PaginationSingleBookComponent from "../../pagination/single-book/pagination-single-book.component";

const BookViewPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"Book title"} />
        </div>

        <div className={bookViewStyle.bookWrap}>
          <ImageComponent image={"Image"} />
          <div className={style.bookInfo}>
            <BookPriceRateComponent price={"123"} />

            <div className={bookViewStyle.authors}>
              <TextComponent text={"Authors"} />
              <TextComponent text={"test"} />
            </div>

            <div className={bookViewStyle.publisher}>
              <TextComponent text={"Publisher"} />
              <TextComponent text={"test"} />
            </div>

            <div className={bookViewStyle.language}>
              <TextComponent text={"Language"} />
              <TextComponent text={"test"} />
            </div>

            <div className={bookViewStyle.format}>
              <TextComponent text={"Format"} />
              <TextComponent text={"test"} />
            </div>

            <div>
              <ButtonComponent content={"Add to cart"} />
              <TextComponent text={"Preview book"} />
            </div>
          </div>
        </div>

        <ul className="navigation-list">
          <li className="navigation-list__item">
            <a href="#">Description</a>
          </li>
          <li className="navigation-list__item">
            <a href="#">Authors</a>
          </li>
          <li className="navigation-list__item">
            <a href="#">Reviews</a>
          </li>
        </ul>

        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <SubscribeComponent />
        <PaginationSingleBookComponent />
      </div>
      <FooterComponent />
    </>
  );
};

export default BookViewPageComponent;
