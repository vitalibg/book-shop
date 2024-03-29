import React, { useState } from "react";
import style from "../../../style/all.module.css";
import TextComponent from "../../common/text.component";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IBookFull } from "../../../util/schema/books";
import FavoriteBookComponent from "./book/favorite-book.component";
import PaginationSingleBookComponent from "../../pagination/single-book/pagination-single-book.component";
import favoritePageStyle from "./favorite.module.css";

const FavoritePageComponent = () => {
  const history = useNavigate();
  const [favoriteBook, setFavoriteBook] = useState(
    localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")!) : []
  );

  const handleClickGoBack = () => {
    history(-1);
  };

  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div onClick={handleClickGoBack} className={style.navBack}>
          <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
        </div>
        <div className={style.title}>
          <TextComponent text={"Favorites"} />
        </div>
        <div className={favoritePageStyle.content}>
          {favoriteBook?.map((book: IBookFull, key: number) => <FavoriteBookComponent key={key} book={book} />)}
        </div>
        <PaginationSingleBookComponent title={"Popular books"} booksQuantity={4} />
      </div>
      <FooterComponent />
    </>
  );
};

export default FavoritePageComponent;
