import React from "react";
import ControlComponent from "./control/control.component";
import style from "./subscribe.module.css";
import DescriptionComponent from "./description/description.component";
import TextComponent from "../common/text.component";

const SubscribeComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <TextComponent text={"Subscribe to newsletter"} />
      </div>
      <DescriptionComponent
        text={`neque inani gubergren alienum omittam dictas urna justo mauris esse discere veri fuisset netus  
          quis pertinax quaeque consul fermentum venenatis`}
      />
      <ControlComponent />
    </div>
  );
};

export default SubscribeComponent;
