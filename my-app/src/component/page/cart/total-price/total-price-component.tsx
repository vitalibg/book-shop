import React from "react";
import style from "./total-rice.module.css";
import LabelComponent from "../../../common/label.component";
import TextComponent from "../../../common/text.component";
import ButtonComponent from "../../../common/button.component";
import { IBookByISBN } from "../../../../util/schema/books";

export interface Book {
  count: number;
  book: IBookByISBN;
}

interface TotalPriceComponentProps {
  cart: Book[];
}

const TotalPriceComponent = ({ cart }: TotalPriceComponentProps) => {
  const sum = cart
    .map(
      (value: { book: IBookByISBN; count: number }) => Number.parseFloat(value.book.price.substring(1)) * value.count
    )
    .reduce((a: number, b: number) => a + b, 0);

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
