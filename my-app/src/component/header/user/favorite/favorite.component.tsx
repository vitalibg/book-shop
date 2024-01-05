import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";

const FavoriteComponent = () => {
  return (
    <div>
      <IconComponent icon={<FontAwesomeIcon icon={faHeart} />} />
    </div>
  );
};

export default FavoriteComponent;
