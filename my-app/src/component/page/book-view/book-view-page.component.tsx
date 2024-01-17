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
import { useNavigate, useParams } from "react-router-dom";
import IconComponent from "../../common/icon.component";
import LabelComponent from "../../common/label.component";
import TabComponent from "./tab/tab.component";
import RatingComponent from "./rating/rating.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

const BookViewPageComponent = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const urlParam = useParams();
  const book = useAppSelector((state) => state.book?.book);


  const handleClickGoBack = () => {
    history(-1);
  };

  const handleClickFavorite = () => {
    let prevFavoriteList = JSON.parse(localStorage.getItem("favorite")!);
    prevFavoriteList.push(JSON.parse(localStorage.getItem("book-view")!));
    localStorage.setItem("favorite", JSON.stringify(prevFavoriteList));
  };

  const handleClickAddToCart = () => {
    let prevCartList = JSON.parse(localStorage.getItem("cart")!);
    prevCartList.push({ book: JSON.parse(localStorage.getItem("book-view")!), count: 1 });
    localStorage.setItem("cart", JSON.stringify(prevCartList));
  };

  useEffect(() => {
    if (localStorage.getItem("favorite") === null) {
      localStorage.setItem("favorite", "[]");
    }
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", "[]");
    }
    localStorage.setItem("book-view", JSON.stringify(book));
    dispatch(fetchBook(urlParam.bookId!));
  }, [book]);

  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div onClick={handleClickGoBack} className={style.navBack}>
          <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
        </div>
        <div className={style.title}>
          <TextComponent text={book?.title} />
        </div>

        <div className={bookViewStyle.bookInfo}>
          <div className={bookViewStyle.image}>
            <div onClick={handleClickFavorite} className={bookViewStyle.icon}>
              <IconComponent icon={<FontAwesomeIcon icon={faHeart} />} />
            </div>
            <ImageComponent image={book?.image} />
          </div>

          <div className={bookViewStyle.infoWrap}>
            <div className={bookViewStyle.wrap}>
              <div className={bookViewStyle.priceRate}>
                <TextComponent text={book?.price} />
                <div className={bookViewStyle.rate}>
                  <RatingComponent defaultRating={Number.parseInt(book?.rating)} />
                </div>
              </div>

              {/*TODO: Create components*/}
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

              <div onClick={handleClickAddToCart} className={bookViewStyle.control}>
                <ButtonComponent content={"Add to cart"} />
              </div>
            </div>
          </div>
        </div>

        <TabComponent description={book?.desc} authors={book?.authors} />

        <SubscribeComponent />

        <PaginationSingleBookComponent booksQuantity={4} title={"Similar books"} />
      </div>
      <FooterComponent />
    </>
  );
};

export default BookViewPageComponent;
