import React from "react";
import style from "./title.module.css";
import TextComponent from "../text.component";

interface TitleComponentProps {
  title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <div className={style.container}>
      <TextComponent text={title} />
    </div>
  );
};

export default TitleComponent;
