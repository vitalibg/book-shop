import React, { useEffect } from "react";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import style from "../../../style/all.module.css";
import TextComponent from "../../common/text.component";
import bookViewStyle from "./book-view.module.css";
import ImageComponent from "../../common/image.component";
import ButtonComponent from "../../common/button.component";
import SubscribeComponent from "../../subscribe/subscribe.component";
import PaginationSingleBookComponent from "../../pagination/single-book/pagination-single-book.component";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchBook } from "../../../store/action";
import { useParams } from "react-router-dom";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LabelComponent from "../../common/label.component";
import TabComponent from "./tab/tab.component";


const BookViewPageComponent = () => {
  const dispatch = useAppDispatch();
  const urlParam = useParams();
  const book = useAppSelector((state) => state.book?.book);

  useEffect(() => {
    dispatch(fetchBook(urlParam.bookId!));
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={book?.title} />
        </div>

        <div className={bookViewStyle.bookInfo}>
          <div className={bookViewStyle.image}>
            <ImageComponent image={book?.image} />
          </div>

          <div className={bookViewStyle.infoWrap}>
            <div className={bookViewStyle.wrap}>
              <div className={bookViewStyle.priceRate}>
                <TextComponent text={book?.price} />
                <div className={bookViewStyle.rate}>
                  <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
                  <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
                  <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
                  <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
                  <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
                </div>
              </div>

              <div className={bookViewStyle.authors}>
                <LabelComponent text={"Authors"} />
                <TextComponent text={book?.authors} />
              </div>

              <div className={bookViewStyle.publisher}>
                <LabelComponent text={"Publisher"} />
                <TextComponent text={book?.publisher} />
              </div>

              <div className={bookViewStyle.language}>
                <LabelComponent text={"Language"} />
                <TextComponent text={book?.language} />
              </div>

              <div className={bookViewStyle.details}>
                <LabelComponent text={"More details"} />
                <IconComponent icon={""} />
              </div>

              <div className={bookViewStyle.control}>
                <ButtonComponent content={"Add to cart"} />
              </div>
            </div>
          </div>
        </div>

        <TabComponent description={book?.desc} authors={book?.authors} reviews={book?.rating} />

        <SubscribeComponent />
        <PaginationSingleBookComponent />
      </div>
      <FooterComponent />
    </>
  );
};

export default BookViewPageComponent;
