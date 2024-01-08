import React from "react";
import ControlComponent from "./control/control.component";
import style from "./subscribe.module.css";
import TextComponent from "../common/text.component";
import ParagraphComponent from "../common/paragraph.component";

const SubscribeComponent = () => {
  return (
    <div className={style.container}>
      <TextComponent text={"Subscribe to newsletter"} />
      <ParagraphComponent
        text={`neque inani gubergren alienum omittam dictas urna justo mauris esse discere veri fuisset netus  
          quis pertinax quaeque consul fermentum venenatis`}
      />
      <ControlComponent />
    </div>
  );
};

export default SubscribeComponent;
