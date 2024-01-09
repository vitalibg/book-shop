import React, { useEffect } from "react";
import TextComponent from "../../common/text.component";
import BookContainerComponent from "../../book/book-container/book-container.component";
import PaginationComponent from "../../pagination/pagination.component";
import SubscribeComponent from "../../subscribe/subscribe.component";
import style from "../../../style/all.module.css";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchNewBooks } from "../../../store/action";

const NewReleasesPageComponent = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector((state) => state.bookList?.books);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"New releases book"} />
        </div>
        <div className={style.book}>
          <BookContainerComponent books={postList} />
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
