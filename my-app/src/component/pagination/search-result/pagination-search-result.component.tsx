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

const BOOK_COUNT_PER_PAGE = 10;
const PaginationSearchResultComponent = () => {
  let lastIndex, firstIndex;
  const dispatch = useAppDispatch();

  const bookList = useAppSelector((state) => state.bookList?.books);

  let bookQuantity = JSON.parse(localStorage.getItem("bookQuantity")!);
  let search = localStorage.getItem("searchValue")!;

  let [currentPage, setCurrentPage] = useState(1);
  let recordsPerPage = BOOK_COUNT_PER_PAGE;

  let nPage = Math.ceil(Number.parseInt(bookQuantity) / recordsPerPage);
  let numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    lastIndex = currentPage * recordsPerPage;
    firstIndex = lastIndex - recordsPerPage;

    const searchResult = JSON.parse(localStorage.getItem("searchResult")!);

    if (searchResult) {
      dispatch(showBooks(searchResult));
    }
  }, [currentPage]);

  const prePage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      localStorage.setItem("searchResult", JSON.stringify(await apiSearchBooksByPage(search, String(currentPage))));
    }
  };

  const changePage = async (page: number) => {
    setCurrentPage(page);
    localStorage.setItem("searchResult", JSON.stringify(await apiSearchBooksByPage(search, String(currentPage))));
  };

  const nextPage = async () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
      localStorage.setItem("searchResult", JSON.stringify(await apiSearchBooksByPage(search, String(currentPage))));
    }
  };

  return (
    <>
      <div className={style.bookContainer}>
        {bookList?.slice(firstIndex, lastIndex).map(($book: any, i: any) => (
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
