import React from "react";
import ParagraphComponent from "../../common/paragraph.component";
import style from "./description.module.css"

interface DescriptionComponentProps {
  text: string;
}

const DescriptionComponent = ({ text }: DescriptionComponentProps) => {
  return (
    <div className={style.container}>
      <ParagraphComponent text={text} />
    </div>
  );
};

export default DescriptionComponent;
