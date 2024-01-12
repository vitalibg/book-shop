import React, { useState } from "react";
import style from "../new-releases/pagination.module.css";
import { Link } from "react-router-dom";
import BookComponent from "../../book/book.component";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../../common/text.component";

const BOOK_COUNT_PER_PAGE = 8;
const PaginationSearchResultComponent = () => {
  let bookList;
  try {
    bookList = JSON.parse(localStorage.getItem("searchResult")!);
  } catch (err) {
    console.error(err);
  }

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
        {records.map(($book: any, i: any) => (
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
          {numbers.map((n, i) => (
            <li key={i}>
              <a
                href={"#"}
                className={[style.paginationItem, currentPage === n ? style.active : ""].join(" ")}
                onClick={() => changePage(n)}
              >
                {n}
              </a>
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

export default PaginationSearchResultComponent;
