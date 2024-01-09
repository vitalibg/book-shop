import React, { useState } from "react";
import style from "./pagination.module.css";
import { Link } from "react-router-dom";
import BookComponent from "../book/book.component";
import { useAppSelector } from "../../store/hooks";
import IconComponent from "../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../common/text.component";

const PaginationComponent = () => {
  const bookList = useAppSelector((state) => state.bookList?.books);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = useAppSelector((state) => state.bookListData?.booksPerPage);

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

  const changeCPage = (id: any) => {
    setCurrentPage(currentPage - 1);
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
          <Link to={`/books/${$book.isbn13}`}>
            <BookComponent key={i} book={$book} />
          </Link>
        ))}
      </div>

      <div className={style.container}>
        <div onClick={prePage} className={style.arrow}>
          <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
          <TextComponent text={"Prev"} />
        </div>

        <ul className={style.paginationContainer}>
          {numbers.map((n, i) => (
            <li className={`paginationItem ${currentPage === n ? "active" : ""}`} key={i}>
              <a href={"#"} className={style.paginationItem} onClick={changeCPage}>
                {n}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={nextPage} className={style.arrow}>
          <TextComponent text={"Next"} />
          <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
