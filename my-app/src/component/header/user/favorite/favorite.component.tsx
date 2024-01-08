import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";
import { Link } from "react-router-dom";

const FavoriteComponent = () => {
  return (
    <Link to={"/bookmarks"}>
      <IconComponent icon={<FontAwesomeIcon icon={faHeart} />} />
    </Link>
  );
};

export default FavoriteComponent;
