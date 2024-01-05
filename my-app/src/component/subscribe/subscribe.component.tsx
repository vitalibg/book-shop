import React from "react";
import TitleComponent from "../common/title/title.component";
import ControlComponent from "./control/control.component";
import style from "./subscribe.module.css";
import DescriptionComponent from "./description/description.component";

const SubscribeComponent = () => {
  return (
    <div className={style.container}>
      <TitleComponent title={"Subscribe to newsletter"} />
      <DescriptionComponent
        text={`neque inani gubergren alienum omittam dictas urna justo mauris esse discere veri fuisset netus  
          quis pertinax quaeque consul fermentum venenatis`}
      />
      <ControlComponent />
    </div>
  );
};

export default SubscribeComponent;
