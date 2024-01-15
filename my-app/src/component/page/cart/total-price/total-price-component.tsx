import React, { useState } from "react";
import style from "./total-rice.module.css";
import LabelComponent from "../../../common/label.component";
import TextComponent from "../../../common/text.component";
import ButtonComponent from "../../../common/button.component";
import { IBookByISBN } from "../../../../util/schema/books";

interface TotalPriceComponentProps {
  cart: IBookByISBN[];
}

const TotalPriceComponent = ({ cart }: TotalPriceComponentProps) => {
  const [sum, setSum] = useState(
    cart
      .map((book: IBookByISBN) => book.price.substring(1))
      .reduce((a: any, b: any) => Number.parseFloat(a) + Number.parseFloat(b), 0)
  );

  return (
    <div className={style.totalPriceContainer}>
      <div className={style.wrap}>
        <div className={style.sum}>
          <LabelComponent text={"Sum total"} />
          <TextComponent text={`$${sum}`} />
        </div>
        <div className={style.vat}>
          <LabelComponent text={"Vat"} />
          <TextComponent text={`$${(sum * 0.1).toFixed(2)}`} />
        </div>
        <div className={style.total}>
          <LabelComponent text={"Total:"} />
          <TextComponent text={`$${(sum + sum * 0.1).toFixed(2)}`} />
        </div>
        <ButtonComponent content={"Check out"} />
      </div>
    </div>
  );
};

export default TotalPriceComponent;
