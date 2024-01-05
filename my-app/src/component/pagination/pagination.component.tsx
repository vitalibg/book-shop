import React from "react";
import style from "./pagination.module.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconComponent from "../common/icon.component";
import TextComponent from "../common/text.component";

const PaginationComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.arrow}>
        <IconComponent icon={<FontAwesomeIcon icon={faArrowLeft} />} />
        <TextComponent text={"Prev"} />
      </div>
      <ul className={style.paginationContainer}>
        <li className={style.paginationItem}>1</li>
        <li className={style.paginationItem}>2</li>
        <li className={style.paginationItem}>3</li>
        <li className={style.paginationItem}>...</li>
        <li className={style.paginationItem}>6</li>
      </ul>
      <div className={style.arrow}>
        <TextComponent text={"Next"} />
        <IconComponent icon={<FontAwesomeIcon icon={faArrowRight} />} />
      </div>
    </div>
  );
};

export default PaginationComponent;
