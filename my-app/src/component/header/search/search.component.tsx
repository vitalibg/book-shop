import React from "react";
import style from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../common/icon.component";

const SearchComponent = () => {
  return (
    <div className={style.container}>
      <input className={style.input} type="search" placeholder={"Search..."} />
      <IconComponent icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </div>
  );
};

export default SearchComponent;
