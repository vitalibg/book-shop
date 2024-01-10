import React from "react";
import IconComponent from "../../common/icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../../common/text.component";
import style from "./copyright.module.css";

const CopyrightComponent = () => {
  return (
    <div className={style.container}>
      <IconComponent icon={<FontAwesomeIcon icon={faCopyright} />} />
      <TextComponent text={" 2024 Bookstore"} />
    </div>
  );
};

export default CopyrightComponent;
