import React from "react";
import style from "./title.module.css";

interface TitleComponentProps {
  title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <div className={style.container}>
      <span className={style.content}>{title}</span>
    </div>
  );
};

export default TitleComponent;
