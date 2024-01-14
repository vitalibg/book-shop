import React, { useEffect, useState } from "react";
import paginationSinglePageStyle from "./pagination-single-book.module.css";
import { Link } from "react-router-dom";
import BookComponent from "../../book/book.component";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../../common/text.component";
import { fetchNewBooks } from "../../../store/action";
import { BOOK_COUNT_ON_SINGLE_BOOK_PAGE } from "../../../util/pagination/pagination-range";
import style from "../../../style/all.module.css";

interface PaginationSingleBookComponentProps {
  booksQuantity: number;
  title: string;
}

const PaginationSingleBookComponent = ({ booksQuantity, title }: PaginationSingleBookComponentProps) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const bookList = useAppSelector((state) => state.bookList?.books);

  const lastViewedBook = page * booksQuantity;
  const firstViewedBook = lastViewedBook - booksQuantity;

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page !== Math.ceil(bookList.length / booksQuantity)) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className={paginationSinglePageStyle.container}>
        <div className={style.subTitle}>
          <TextComponent text={title} />
        </div>

        <div className={paginationSinglePageStyle.control}>
          <div onClick={prevPage} className={paginationSinglePageStyle.arrow}>
            <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
          </div>

          <div onClick={nextPage} className={paginationSinglePageStyle.arrow}>
            <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
          </div>
        </div>
      </div>

      <div className={paginationSinglePageStyle.bookContainer}>
        {bookList?.slice(firstViewedBook, lastViewedBook).map((book, key) => (
          <Link key={key} to={`/books/${book.isbn13}`}>
            <BookComponent book={book} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PaginationSingleBookComponent;
