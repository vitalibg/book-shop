import React, { useState } from "react";
import style from "./pagination.module.css";
import { Link } from "react-router-dom";
import BookComponent from "../../book/book.component";
import { useAppSelector } from "../../../store/hooks";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../../common/text.component";

const BOOK_COUNT_PER_PAGE = 8;

const PaginationComponent = () => {
  const bookList = useAppSelector((state) => state.bookList?.books);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = BOOK_COUNT_PER_PAGE;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = bookList?.slice(firstIndex, lastIndex);

  const nPage = Math.ceil(bookList.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className={style.bookContainer}>
        {records.map(($book, i) => (
          <Link key={i} to={`/books/${$book.isbn13}`}>
            <BookComponent book={$book} />
          </Link>
        ))}
      </div>

      <div className={style.container}>
        <div onClick={prePage} className={currentPage === 1 ? style.lock : style.arrow}>
          <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
          <TextComponent text={"Prev"} />
        </div>

        <ul className={style.paginationContainer}>
          {numbers.map((page, key) => (
            <li
              key={key}
              className={[style.paginationItem, currentPage === page ? style.active : ""].join(" ")}
              onClick={() => changePage(page)}
            >
              {page}
            </li>
          ))}
        </ul>

        <div onClick={nextPage} className={currentPage === nPage ? style.lock : style.arrow}>
          <TextComponent text={"Next"} />
          <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
