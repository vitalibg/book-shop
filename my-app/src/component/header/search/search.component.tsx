import React, { useState } from "react";
import style from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../common/icon.component";
import apiSearchBook from "../../../api/search-book";
import { useNavigate } from "react-router-dom";
import apiBookQuantity from "../../../api/page-count";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchHandler = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      localStorage.setItem("books-quantity", JSON.stringify(await apiBookQuantity(search)))
      localStorage.setItem("search-result", JSON.stringify(await apiSearchBook(search)));
      localStorage.setItem("search-book", search);
      navigate(`/search/${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        onKeyPress={searchHandler}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className={style.input}
        type="search"
        placeholder={"Search..."}
      />
      <IconComponent icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </div>
  );
};

export default SearchComponent;
