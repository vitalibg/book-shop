import React, { useState } from "react";
import style from "./pagination.module.css";
import { Link } from "react-router-dom";
import BookComponent from "../../book/book.component";
import { useAppSelector } from "../../../store/hooks";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BOOK_COUNT_ON_NEW_RELEASES_PAGE } from "../../../util/pagination/pagination-range";
import TextComponent from "../../common/text.component";

const PaginationComponent = () => {
  const bookList = useAppSelector((state) => state.bookList?.books);
  const [page, setPage] = useState(1);

  const lastIndex = page * BOOK_COUNT_ON_NEW_RELEASES_PAGE;
  const firstIndex = lastIndex - BOOK_COUNT_ON_NEW_RELEASES_PAGE;

  const nPage = Math.ceil(bookList.length / BOOK_COUNT_ON_NEW_RELEASES_PAGE);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  const nextPage = () => {
    if (page !== nPage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className={style.bookContainer}>
        {bookList?.slice(firstIndex, lastIndex).map(($book, i) => (
          <Link key={i} to={`/books/${$book.isbn13}`}>
            <BookComponent book={$book} />
          </Link>
        ))}
      </div>

      <div className={style.container}>
        <div onClick={prePage} className={page === 1 ? style.lock : style.arrow}>
          <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
          <TextComponent text={"Prev"} />
        </div>

        <ul className={style.paginationContainer}>
          {numbers.map((pageNumber, key) => (
            <li
              key={key}
              className={[style.paginationItem, page === pageNumber ? style.active : ""].join(" ")}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}
        </ul>

        <div onClick={nextPage} className={page === nPage ? style.lock : style.arrow}>
          <TextComponent text={"Next"} />
          <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
