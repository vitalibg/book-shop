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

const BOOK_COUNT_PER_PAGE = 3;

const PaginationSingleBookComponent = () => {
  const dispatch = useAppDispatch();
  const bookList = useAppSelector((state) => state.bookList?.books);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = BOOK_COUNT_PER_PAGE;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = bookList?.slice(firstIndex, lastIndex);

  const nPage = Math.ceil(bookList.length / recordsPerPage);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className={paginationSinglePageStyle.container}>
        <div className={paginationSinglePageStyle.subTitle}>
          <TextComponent text={"Similar books"} />
        </div>

        <div className={paginationSinglePageStyle.control}>
          <div onClick={prePage} className={paginationSinglePageStyle.arrow}>
            <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
          </div>

          <div onClick={nextPage} className={paginationSinglePageStyle.arrow}>
            <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
          </div>
        </div>
      </div>

      <div className={paginationSinglePageStyle.bookContainer}>
        {records.map(($book, i) => (
          <Link key={i} to={`/books/${$book.isbn13}`}>
            <BookComponent book={$book} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PaginationSingleBookComponent;
