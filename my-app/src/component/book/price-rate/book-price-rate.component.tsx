import React from "react";
import TextComponent from "../../common/text.component";
import IconComponent from "../../common/icon.component";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./price-rate.module.css";

interface PriceRateComponentProps {
  price: string;
}

const BookPriceRateComponent = ({ price }: PriceRateComponentProps) => {
  return (
    <div className={style.container}>
      <TextComponent text={price} />
      <div>
        <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
      </div>
    </div>
  );
};

export default BookPriceRateComponent;
