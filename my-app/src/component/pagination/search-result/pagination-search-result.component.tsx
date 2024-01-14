import React, { useEffect, useState } from "react";
import style from "./pagination-search-result.module.css";
import { Link } from "react-router-dom";
import BookComponent from "../../book/book.component";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../../common/text.component";
import apiSearchBooksByPage from "../../../api/search-book-by-page";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { showBooks } from "../../../store/action";
import { BOOK_COUNT_ON_SEARCH_RESULT_PAGE, paginationRange } from "../../../util/pagination/pagination-range";

const PaginationSearchResultComponent = () => {
  let lastViewedBook, firstViewedBook;

  const dispatch = useAppDispatch();
  let [currentPage, setCurrentPage] = useState(1);

  const bookList = useAppSelector((state) => state.bookList?.books);

  let booksQuantity = JSON.parse(localStorage.getItem("books-quantity")!);
  let searchBook = localStorage.getItem("search-book")!;

  let pagesQuantity = Math.ceil(Number.parseInt(booksQuantity) / BOOK_COUNT_ON_SEARCH_RESULT_PAGE);
  let viewPaginationRange = paginationRange(pagesQuantity, currentPage, 2);

  useEffect(() => {
    lastViewedBook = currentPage * BOOK_COUNT_ON_SEARCH_RESULT_PAGE;
    firstViewedBook = lastViewedBook - BOOK_COUNT_ON_SEARCH_RESULT_PAGE;

    const searchResult = JSON.parse(localStorage.getItem("search-result")!);

    if (searchResult) {
      dispatch(showBooks(searchResult));
    }
  }, [currentPage]);

  const prePage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      localStorage.setItem("search-result", JSON.stringify(await apiSearchBooksByPage(searchBook, String(currentPage))));
    }
  };

  const changePage = async (page: number) => {
    if (String(page) === "...") {
      return;
    }
    setCurrentPage(page);
    localStorage.setItem("search-result", JSON.stringify(await apiSearchBooksByPage(searchBook, String(currentPage))));
  };

  const nextPage = async () => {
    if (currentPage !== pagesQuantity) {
      setCurrentPage(currentPage + 1);
      localStorage.setItem("search-result", JSON.stringify(await apiSearchBooksByPage(searchBook, String(currentPage))));
    }
  };

  return (
    <>
      <div className={style.bookContainer}>
        {bookList?.slice(firstViewedBook, lastViewedBook).map(($book: any, i: any) => (
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
          {viewPaginationRange.map((pageNumber, key) => (
            <li
              key={key}
              className={[style.paginationItem, currentPage === pageNumber ? style.active : ""].join(" ")}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}
        </ul>

        <div onClick={nextPage} className={currentPage === pagesQuantity ? style.lock : style.arrow}>
          <TextComponent text={"Next"} />
          <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
        </div>
      </div>
    </>
  );
};

export default PaginationSearchResultComponent;
