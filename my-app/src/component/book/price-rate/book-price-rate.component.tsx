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
      <div>
        <TextComponent text={price} />
      </div>
      <ul>
        <li>
          <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        </li>
        <li>
          <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        </li>
        <li>
          <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        </li>
        <li>
          <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        </li>
        <li>
          <IconComponent icon={<FontAwesomeIcon icon={faStar} />} />
        </li>
      </ul>
    </div>
  );
};

export default BookPriceRateComponent;
