import React from "react";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import style from "../../../style/all.module.css";
import TextComponent from "../../common/text.component";
import PaginationSearchResultComponent from "../../pagination/search-result/pagination-search-result.component";

const BookSearchPageComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={`\'${localStorage.getItem("searchValue")}\' search results`} />
        </div>
        <PaginationSearchResultComponent />
      </div>
      <FooterComponent />
    </>
  );
};

export default BookSearchPageComponent;
